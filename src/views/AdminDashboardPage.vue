<template>
  <div class="min-h-[100dvh] bg-slate-50 flex flex-col md:flex-row overflow-hidden text-slate-800 pb-20 md:pb-0 relative">
    
    <!-- Mobile Header -->
    <header class="md:hidden bg-slate-900/95 text-white p-4 flex justify-between items-center z-40 sticky top-0 shadow-lg border-b border-white/10">
      <router-link to="/" class="flex items-center gap-3">
        <img src="/img/NFS_Insure_Logo_Off-white_Mustard_Combination@2x.png" alt="NFS Insure" class="h-6" />
      </router-link>
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold border border-white/20">
          {{ userInitials }}
        </div>
        <button @click="handleLogout" class="text-xs font-bold text-slate-300 hover:text-white px-3 py-1.5 bg-white/10 hover:bg-danger/20 hover:text-danger rounded-full transition-colors">
          Logout
        </button>
      </div>
    </header>

    <!-- Mobile Bottom Navigation Bar -->
    <nav class="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-slate-200/60 z-40 px-8 py-3 flex justify-between items-end shadow-[0_-10px_40px_rgba(0,0,0,0.05)] safe-area-bottom">
      <button 
        @click="selectTab('overview')" 
        class="flex flex-col items-center gap-1 transition-colors"
        :class="activeTab === 'overview' ? 'text-accent' : 'text-slate-400 hover:text-slate-600'"
      >
        <div class="w-10 h-10 rounded-2xl flex items-center justify-center transition-all" :class="activeTab === 'overview' ? 'bg-accent/10' : ''">
          <i class="fas fa-chart-pie text-xl"></i>
        </div>
        <span class="text-[10px] font-black uppercase tracking-wider">Overview</span>
      </button>

      <!-- Center App Button -->
      <button 
        @click="isMobileMenuOpen = true" 
        class="flex flex-col items-center gap-1 transition-colors relative"
        :class="isAppTabActive ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'"
      >
        <div class="w-14 h-14 -mt-8 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-xl shadow-slate-900/30 border-[6px] border-slate-50 transition-transform active:scale-95">
          <i class="fas fa-layer-group text-xl"></i>
        </div>
        <span class="text-[10px] font-black uppercase tracking-wider mt-1">Apps</span>
        <span v-if="totalPendingCount > 0" class="absolute -top-6 -right-2 w-6 h-6 bg-danger text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white shadow-sm">{{ totalPendingCount }}</span>
      </button>

      <button 
        @click="selectTab('settings')" 
        class="flex flex-col items-center gap-1 transition-colors"
        :class="activeTab === 'settings' ? 'text-purple-600' : 'text-slate-400 hover:text-slate-600'"
      >
        <div class="w-10 h-10 rounded-2xl flex items-center justify-center transition-all" :class="activeTab === 'settings' ? 'bg-purple-500/10' : ''">
          <i class="fas fa-cog text-xl"></i>
        </div>
        <span class="text-[10px] font-black uppercase tracking-wider">Settings</span>
      </button>
    </nav>

    <!-- Mobile Bottom Sheet Menu (Applications) -->
    <div 
      v-if="isMobileMenuOpen" 
      class="fixed inset-0 z-[60] md:hidden flex flex-col justify-end"
    >
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]" @click="isMobileMenuOpen = false"></div>
      
      <!-- Sheet -->
      <div class="bg-white w-full rounded-t-[2.5rem] p-6 pb-10 relative z-10 animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)] shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
        <div class="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6"></div>
        <h3 class="text-xl font-black text-slate-800 mb-6 px-2">Select Application Type</h3>
        
        <div class="space-y-3">
          <button 
            v-for="tab in applicationTabs" :key="tab.id"
            @click="selectTab(tab.id)"
            class="w-full flex items-center justify-between p-4 rounded-2xl border transition-all active:scale-[0.98]"
            :class="activeTab === tab.id ? `bg-slate-50 border-slate-300 shadow-sm` : 'bg-white border-slate-100 hover:bg-slate-50'"
          >
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md" :class="tab.color">
                <i :class="tab.icon" class="text-lg"></i>
              </div>
              <span class="font-black text-slate-700 text-base" :class="activeTab === tab.id ? 'text-slate-900' : ''">{{ tab.label }}</span>
            </div>
            <span v-if="counts[tab.id] > 0" class="inline-flex bg-accent text-white text-[11px] font-bold py-1 px-3 rounded-full shadow-sm">{{ counts[tab.id] }} New</span>
            <i v-else class="fas fa-chevron-right text-slate-300 text-sm"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Sidebar (Desktop Only) -->
    <nav 
      class="
        hidden md:flex inset-y-0 left-0 w-72 bg-slate-900 text-slate-300 shadow-2xl z-50 flex-col
        md:relative md:shrink-0 md:border-r md:border-white/10 md:h-[100dvh]
      "
    >
      <div class="flex p-6 items-center gap-4 border-b border-white/10 relative overflow-hidden shrink-0">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
        <router-link to="/" class="relative z-10">
          <img src="/img/NFS_Insure_Logo_Off-white_Mustard_Combination@2x.png" alt="NFS Insure" class="h-8" />
        </router-link>
      </div>

      <!-- Navigation Links -->
      <div class="flex flex-col overflow-y-auto flex-1 p-4 gap-2 scrollbar-hide items-stretch">
        
        <button 
          @click="selectTab('overview')"
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative group"
          :class="activeTab === 'overview' ? 'bg-accent text-white shadow-sm' : 'text-slate-400 hover:bg-slate-800'"
        >
          <i class="fas fa-chart-pie w-6 text-center transition-transform group-hover:scale-110"></i>
          <span class="text-sm font-semibold whitespace-nowrap">Overview</span>
        </button>

        <div class="my-4">
          <h3 class="px-4 text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Applications</h3>
        </div>

        <button 
          v-for="tab in applicationTabs" :key="tab.id"
          @click="selectTab(tab.id)"
          class="flex justify-between items-center px-4 py-3 rounded-xl transition-all duration-300 relative group"
          :class="activeTab === tab.id ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-800 hover:text-white'"
        >
          <div class="flex items-center gap-3">
            <i :class="tab.icon" class="w-6 text-center transition-transform group-hover:scale-110"></i>
            <span class="text-sm font-semibold whitespace-nowrap">{{ tab.label }}</span>
          </div>
          <span v-if="counts[tab.id] > 0" class="inline-flex bg-accent text-white text-[10px] font-bold py-0.5 px-2 rounded-full min-w-[20px] justify-center items-center shadow-sm">{{ counts[tab.id] }}</span>
        </button>

        <div class="my-4">
          <h3 class="px-4 text-[10px] uppercase tracking-[2px] font-bold text-slate-500 mb-2">Settings</h3>
        </div>

        <button 
          @click="selectTab('settings')"
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group"
          :class="activeTab === 'settings' ? 'bg-white/10 text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]' : 'text-slate-400 hover:bg-white/5 hover:text-white'"
        >
          <i class="fas fa-cog w-6 text-center transition-transform group-hover:rotate-90"></i>
          <span class="text-sm font-semibold">Settings</span>
        </button>

      </div>

      <!-- Desktop & Mobile Logout -->
      <div class="p-4 border-t border-white/10 shrink-0">
        <div class="flex items-center gap-3 px-4 mb-4">
          <div class="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center text-accent text-xs font-bold shrink-0 border border-accent/30 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            {{ userInitials }}
          </div>
          <div class="overflow-hidden">
            <p class="text-xs font-semibold text-slate-300 truncate">{{ userDisplayName }}</p>
            <p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{{ userEmail }}</p>
          </div>
        </div>
        <button @click="handleLogout" class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all text-sm font-bold shadow-sm group">
          <i class="fas fa-sign-out-alt group-hover:translate-x-1 transition-transform"></i> Logout
        </button>
      </div>
    </nav>

    <!-- Main Content Area -->
    <main class="flex-1 flex flex-col h-[100dvh] overflow-hidden bg-[#f4f7f9] relative">
      
      <!-- Top Action Bar (Desktop) -->
      <div class="hidden md:flex items-center justify-between p-6 bg-white/50 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-30">
        <div>
          <h2 class="text-2xl font-black text-slate-800 tracking-tight">{{ activeTabTitle }}</h2>
          <p class="text-sm font-medium text-slate-500 mt-1">{{ activeTabSubtitle }}</p>
        </div>
        <div class="flex items-center gap-3">
          <button @click="fetchData" class="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-accent hover:border-accent hover:shadow-md transition-all active:scale-95" title="Refresh Data">
            <i class="fas fa-sync-alt" :class="{'fa-spin': loading}"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Title (Visible only on mobile) -->
      <div class="md:hidden p-5 bg-white border-b border-slate-200 shadow-sm flex justify-between items-center z-30 sticky top-0">
        <h2 class="text-xl font-bold text-slate-800">{{ activeTabTitle }}</h2>
        <button @click="fetchData" class="text-slate-400 hover:text-accent">
          <i class="fas fa-sync-alt" :class="{'fa-spin': loading}"></i>
        </button>
      </div>

      <!-- Content Scroll Area -->
      <div class="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
        
        <div v-if="loading && isInitialLoad" class="h-full flex flex-col items-center justify-center text-slate-400">
          <i class="fas fa-circle-notch fa-spin text-4xl text-accent mb-4"></i>
          <p class="font-medium animate-pulse">Loading dashboard data...</p>
        </div>

        <!-- OVERVIEW TAB -->
        <div v-else-if="activeTab === 'overview'" class="max-w-6xl mx-auto space-y-6 md:space-y-8 animate-fade-in-up">
          
          <!-- Summary Cards -->
          <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            
            <!-- Total Applications (Spans 2 cols on mobile) -->
            <div class="col-span-2 sm:col-span-1 lg:col-span-1 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-5 shadow-xl shadow-slate-900/20 border border-slate-700 flex flex-col relative overflow-hidden group">
              <div class="absolute -right-6 -top-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-out"></div>
              <div class="flex items-center justify-between mb-4 relative z-10">
                <div class="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <i class="fas fa-inbox text-xl"></i>
                </div>
              </div>
              <div class="relative z-10 mt-auto">
                <div class="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-1">{{ totalApplications }}</div>
                <h3 class="text-slate-400 font-bold text-xs uppercase tracking-wider">Total Apps</h3>
              </div>
            </div>

            <!-- Pending Review (1 col on mobile) -->
            <div class="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-3xl p-5 shadow-lg shadow-amber-500/5 border border-amber-200/50 flex flex-col relative overflow-hidden group">
              <div class="absolute -right-4 -bottom-4 w-20 h-20 bg-amber-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              <div class="flex items-center mb-4 relative z-10">
                <div class="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-600 flex items-center justify-center">
                  <i class="fas fa-clock text-lg"></i>
                </div>
              </div>
              <div class="relative z-10 mt-auto">
                <div class="text-3xl md:text-4xl font-black text-slate-800 tracking-tight leading-none mb-1">{{ totalPending }}</div>
                <h3 class="text-amber-700 font-bold text-[10px] uppercase tracking-wider">Pending</h3>
              </div>
            </div>

            <!-- Approved (1 col on mobile) -->
            <div class="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-3xl p-5 shadow-lg shadow-emerald-500/5 border border-emerald-200/50 flex flex-col relative overflow-hidden group">
              <div class="absolute -right-4 -bottom-4 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              <div class="flex items-center mb-4 relative z-10">
                <div class="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-600 flex items-center justify-center">
                  <i class="fas fa-check-circle text-lg"></i>
                </div>
              </div>
              <div class="relative z-10 mt-auto">
                <div class="text-3xl md:text-4xl font-black text-slate-800 tracking-tight leading-none mb-1">{{ totalApproved }}</div>
                <h3 class="text-emerald-700 font-bold text-[10px] uppercase tracking-wider">Approved</h3>
              </div>
            </div>

            <!-- Recent 7 Days (Spans 2 cols on mobile) -->
            <div class="col-span-2 sm:col-span-1 lg:col-span-1 bg-white rounded-3xl p-5 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col relative overflow-hidden group">
              <div class="absolute right-0 top-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full group-hover:scale-110 transition-transform duration-700"></div>
              <div class="flex items-center justify-between mb-4 relative z-10">
                <div class="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                  <i class="fas fa-calendar-day text-xl"></i>
                </div>
                <div class="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500">7 DAYS</div>
              </div>
              <div class="relative z-10 mt-auto">
                <div class="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-none mb-1">{{ recentApplicationsCount }}</div>
                <h3 class="text-slate-400 font-bold text-xs uppercase tracking-wider">Recent Apps</h3>
              </div>
            </div>

          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <!-- Category Breakdown -->
            <div class="lg:col-span-1 bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <h3 class="text-lg font-bold text-slate-800 mb-6 flex items-center justify-between">
                Category Breakdown
                <i class="fas fa-chart-bar text-slate-300"></i>
              </h3>
              
              <div class="space-y-5">
                <div v-for="tab in applicationTabs" :key="tab.id" class="group">
                  <div class="flex justify-between text-sm font-semibold mb-2">
                    <span class="text-slate-700 group-hover:text-accent transition-colors"><i :class="tab.icon" class="w-5 text-slate-400 group-hover:text-accent mr-1"></i> {{ tab.shortLabel || tab.label }}</span>
                    <span class="text-slate-900 bg-slate-100 px-2 py-0.5 rounded-md">{{ counts[tab.id] || 0 }}</span>
                  </div>
                  <div class="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div class="bg-gradient-to-r from-accent to-blue h-2.5 rounded-full transition-all duration-1000 ease-out" :style="{ width: getPercentage(counts[tab.id]) + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recent Activity Feed -->
            <div class="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div class="flex justify-between items-center mb-6">
                <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2">
                  Recent Activity
                  <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </span>
                </h3>
              </div>

              <div v-if="allRecentApplications.length === 0" class="py-12 text-center text-slate-400">
                <i class="fas fa-wind text-3xl mb-3 opacity-50"></i>
                <p class="font-medium">No recent applications.</p>
              </div>

              <div v-else class="space-y-4">
                <div v-for="app in allRecentApplications" :key="app.id" @click="viewDetails(app, app._tableName)" 
                     class="flex items-start md:items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-accent hover:shadow-md transition-all cursor-pointer bg-slate-50/50 hover:bg-white group">
                  
                  <div class="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110" :class="getCategoryColor(app._tableName)">
                    <i :class="getCategoryIcon(app._tableName)" class="text-lg"></i>
                  </div>
                  
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between gap-2 mb-1">
                      <h4 class="font-bold text-slate-800 truncate">{{ getPrimaryIdentifier(app, app._tableName) }}</h4>
                      <StatusBadge :status="app.status" />
                    </div>
                    <div class="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-xs font-semibold text-slate-500">
                      <span class="bg-white px-2 py-1 rounded-md border border-slate-200 shadow-sm whitespace-nowrap">{{ getCategoryName(app._tableName) }}</span>
                      <span class="flex items-center gap-1"><i class="far fa-clock"></i> {{ formatTimeAgo(app.created_at) }}</span>
                    </div>
                  </div>
                  
                  <div class="hidden md:flex items-center text-slate-300 group-hover:text-accent transition-colors">
                    <i class="fas fa-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SETTINGS / PROFILE TAB -->
        <div v-else-if="activeTab === 'settings'" class="max-w-4xl mx-auto mt-6 animate-fade-in-up space-y-8">
          
          <!-- Profile Settings -->
          <div class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group">
            <div class="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full group-hover:scale-110 transition-transform duration-700"></div>
            <div class="p-8 md:p-10 relative z-10">
              <div class="flex items-center gap-5 mb-8">
                <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-white flex items-center justify-center shadow-lg shadow-slate-900/20 text-2xl font-black border border-white/20">
                  {{ userInitials }}
                </div>
                <div>
                  <h2 class="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">My Profile</h2>
                  <p class="text-slate-500 text-sm font-semibold mt-1">Manage your administrator account credentials.</p>
                </div>
              </div>
              
              <form @submit.prevent="handleUpdateProfile" class="space-y-6 max-w-2xl">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-[10px] font-black uppercase tracking-[2px] text-slate-400 mb-2">Display Name</label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i class="fas fa-user text-slate-400"></i>
                      </div>
                      <input v-model="profileForm.display_name" type="text" class="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-semibold text-slate-700 shadow-sm" />
                    </div>
                  </div>

                  <div>
                    <label class="block text-[10px] font-black uppercase tracking-[2px] text-slate-400 mb-2">Email Address</label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i class="fas fa-envelope text-slate-400"></i>
                      </div>
                      <input v-model="profileForm.email" type="email" class="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-semibold text-slate-700 shadow-sm" />
                    </div>
                  </div>
                  
                  <div>
                    <label class="block text-[10px] font-black uppercase tracking-[2px] text-slate-400 mb-2">New Password (Optional)</label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i class="fas fa-lock text-slate-400"></i>
                      </div>
                      <input v-model="profileForm.password" type="password" minlength="6" class="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-semibold text-slate-700 shadow-sm" placeholder="••••••••" />
                    </div>
                  </div>
                </div>
                
                <div v-if="profileMsg" :class="profileSuccess ? 'bg-success/10 text-success border-success/20' : 'bg-danger/10 text-danger border-danger/20'" class="text-sm font-bold p-4 rounded-xl border flex items-start gap-3">
                  <i class="fas mt-0.5" :class="profileSuccess ? 'fa-check-circle' : 'fa-exclamation-circle'"></i>
                  {{ profileMsg }}
                </div>
                
                <div class="flex justify-end pt-4 border-t border-slate-100">
                  <button type="submit" :disabled="profileLoading" class="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 flex items-center gap-2">
                    <span v-if="profileLoading"><i class="fas fa-spinner fa-spin"></i> Saving...</span>
                    <span v-else><i class="fas fa-save"></i> Save Changes</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <!-- User Management -->
          <div class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-10 relative overflow-hidden group">
             <div class="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] flex items-center justify-center transition-transform group-hover:scale-110">
              <i class="fas fa-users-cog text-5xl text-accent/20 ml-8 mb-8"></i>
            </div>
            
            <h2 class="text-xl md:text-2xl font-black text-slate-800 mb-2">User Management</h2>
            <p class="text-slate-500 text-sm mb-6 font-medium max-w-2xl">Invite new administrators via Magic Link.</p>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              <!-- Invite Form -->
              <div>
                <h3 class="text-sm font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Invite New Admin</h3>
                <form @submit.prevent="handleInviteUser" class="space-y-4">
                  <div>
                    <label class="block text-[10px] font-black uppercase tracking-[2px] text-slate-400 mb-1.5">Display Name</label>
                    <input v-model="inviteForm.display_name" type="text" required class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent outline-none transition-all text-sm font-semibold" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label class="block text-[10px] font-black uppercase tracking-[2px] text-slate-400 mb-1.5">Email</label>
                    <input v-model="inviteForm.email" type="email" required class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent outline-none transition-all text-sm font-semibold" placeholder="jane@example.com" />
                  </div>
                  
                  <div v-if="inviteMsg" :class="inviteSuccess ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'" class="text-xs font-bold p-3 rounded-lg border flex items-start gap-2">
                    {{ inviteMsg }}
                  </div>
                  
                  <button type="submit" :disabled="inviteLoading" class="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                    <span v-if="inviteLoading"><i class="fas fa-spinner fa-spin"></i> Sending Link...</span>
                    <span v-else><i class="fas fa-envelope"></i> Send Magic Link</span>
                  </button>
                </form>
              </div>

              <!-- List of Users -->
              <div>
                <h3 class="text-sm font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Active Administrators</h3>
                <div v-if="adminUsersLoading" class="py-8 text-center text-slate-400">
                  <i class="fas fa-circle-notch fa-spin"></i>
                </div>
                <div v-else-if="adminUsers.length === 0" class="py-8 text-center text-slate-400 text-sm font-medium">
                  No users found in profiles table.
                </div>
                <div v-else class="space-y-3 max-h-[350px] overflow-y-auto custom-scrollbar pr-2">
                  <div v-for="admin in adminUsers" :key="admin.id" class="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white transition-colors">
                    <div class="w-10 h-10 rounded-lg bg-slate-200 text-slate-600 font-bold flex items-center justify-center shrink-0">
                      {{ (admin.display_name || admin.email).substring(0, 2).toUpperCase() }}
                    </div>
                    <div class="overflow-hidden">
                      <p class="text-sm font-bold text-slate-800 truncate">{{ admin.display_name || 'Admin User' }}</p>
                      <p class="text-xs font-medium text-slate-500 truncate">{{ admin.email }}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- APPLICATION DATA TABLES & CARDS -->
        <div v-else class="max-w-7xl mx-auto animate-fade-in-up">
          
          <!-- Filters / Search Bar placeholder -->
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div class="relative w-full md:w-96">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i class="fas fa-search text-slate-400"></i>
              </div>
              <input type="text" v-model="searchQuery" class="w-full pl-11 pr-4 py-3 rounded-xl border-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] bg-white focus:ring-2 focus:ring-accent outline-none text-sm font-medium placeholder-slate-400 transition-all" placeholder="Search applications..." />
            </div>
            
            <div class="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              <span class="text-xs font-bold text-slate-400 uppercase mr-2 shrink-0">Filter:</span>
              <button class="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-sm shrink-0 hover:bg-slate-800 transition-colors">All</button>
              <button class="px-4 py-2 rounded-xl bg-white text-slate-500 hover:bg-slate-100 text-xs font-bold shadow-sm shrink-0 border border-slate-100 transition-colors">Pending</button>
              <button class="px-4 py-2 rounded-xl bg-white text-slate-500 hover:bg-slate-100 text-xs font-bold shadow-sm shrink-0 border border-slate-100 transition-colors">Approved</button>
            </div>
          </div>

          <div v-if="currentData.length === 0" class="bg-white rounded-3xl p-16 text-center text-slate-400 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            <div class="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 border border-slate-100 shadow-inner">
              <i :class="currentActiveTabObj.icon"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-700 mb-1">No Applications Found</h3>
            <p class="text-sm font-medium">There are currently no submissions for this category.</p>
          </div>

          <div v-else>
            <!-- Mobile Cards View (Hidden on MD and up) -->
            <div class="md:hidden space-y-4">
              <div v-for="row in currentData" :key="row.id" @click="viewDetails(row, activeTab)" class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm active:scale-[0.98] transition-transform relative overflow-hidden">
                <div class="flex justify-between items-start mb-3">
                  <div>
                    <h4 class="font-black text-slate-800 text-lg">{{ getPrimaryIdentifier(row, activeTab) }}</h4>
                    <p class="text-xs text-slate-400 font-semibold">{{ formatShortDate(row.created_at) }}</p>
                  </div>
                  <StatusBadge :status="row.status" />
                </div>
                <div class="space-y-2 mt-4 pt-4 border-t border-slate-50">
                  <div v-for="col in columns[activeTab].slice(1)" :key="col.key" class="flex justify-between items-center">
                    <span class="text-xs font-bold text-slate-400 uppercase">{{ col.label }}</span>
                    <span class="text-sm font-semibold text-slate-700 truncate max-w-[150px] text-right">{{ row[col.key] || '-' }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Desktop Table View (Hidden on small screens) -->
            <div class="hidden md:block bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
              <div class="overflow-x-auto custom-scrollbar">
                <table class="w-full text-left border-collapse whitespace-nowrap">
                  <thead>
                    <tr class="bg-slate-50 border-b border-slate-100">
                      <th class="py-5 px-6 text-[10px] font-black text-slate-400 uppercase tracking-widest w-48">Date Received</th>
                      <th v-for="col in columns[activeTab]" :key="col.key" class="py-5 px-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {{ col.label }}
                      </th>
                      <th class="py-5 px-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center w-32">Status</th>
                      <th class="py-5 px-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right rounded-tr-3xl w-24">Action</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-50">
                    <tr v-for="row in currentData" :key="row.id" 
                        @click="viewDetails(row, activeTab)"
                        class="hover:bg-slate-50/80 transition-colors cursor-pointer group">
                      <td class="py-4 px-6">
                        <div class="flex items-center gap-3">
                          <div class="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center font-bold text-xs group-hover:bg-white group-hover:shadow-sm transition-all border border-slate-100">
                            {{ formatShortDate(row.created_at).split(' ')[1] }}
                          </div>
                          <div>
                            <div class="text-sm font-bold text-slate-800">{{ formatShortDate(row.created_at) }}</div>
                            <div class="text-[11px] font-semibold text-slate-400">{{ formatTime(row.created_at) }}</div>
                          </div>
                        </div>
                      </td>
                      <td v-for="(col, index) in columns[activeTab]" :key="col.key" class="py-4 px-6">
                        <span class="text-sm font-semibold text-slate-700" :class="{'text-slate-900 font-black': index === 0}">{{ row[col.key] || '-' }}</span>
                      </td>
                      <td class="py-4 px-6 text-center">
                        <StatusBadge :status="row.status" />
                      </td>
                      <td class="py-4 px-6 text-right">
                        <button class="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 group-hover:text-accent group-hover:border-accent group-hover:shadow-md transition-all flex items-center justify-center ml-auto">
                          <i class="fas fa-chevron-right text-xs"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>

    <!-- Slide-over Details Drawer -->
    <transition name="slide-fade">
      <div v-if="selectedRecord" class="fixed inset-0 z-[100] flex justify-end">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" @click="closeDrawer"></div>
        
        <!-- Drawer Panel -->
        <div class="relative w-full md:w-[600px] bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out border-l border-slate-200 overflow-hidden">
          
          <!-- Drawer Header -->
          <div class="bg-slate-900 text-white px-6 py-6 border-b border-slate-800 flex justify-between items-start shrink-0">
            <div>
              <div class="flex items-center gap-3 mb-2">
                <span class="px-2.5 py-1 rounded-md bg-white/10 text-xs font-bold uppercase tracking-wider text-slate-300 border border-white/10">
                  {{ getCategoryName(selectedTable) }}
                </span>
                <span class="text-xs text-slate-400 font-medium"><i class="far fa-clock mr-1"></i> {{ formatDetailedDate(selectedRecord.created_at) }}</span>
              </div>
              <h3 class="text-2xl font-black">{{ getPrimaryIdentifier(selectedRecord, selectedTable) }}</h3>
            </div>
            <button @click="closeDrawer" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
              <i class="fas fa-times"></i>
            </button>
          </div>

          <!-- Status Action Bar -->
          <div class="bg-slate-50 border-b border-slate-200 p-4 px-6 flex items-center justify-between shrink-0">
            <div class="flex items-center gap-3">
              <span class="text-xs font-bold uppercase text-slate-500">Current Status:</span>
              <StatusBadge :status="selectedRecord.status" size="lg" />
            </div>
            
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-slate-400 mr-1">Update:</span>
              <div class="relative inline-block text-left">
                <select 
                  @change="updateStatus($event.target.value)" 
                  :value="selectedRecord.status || 'pending'"
                  :disabled="isUpdatingStatus"
                  class="appearance-none bg-white border border-slate-200 hover:border-accent text-sm font-bold text-slate-700 py-2 pl-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/20 cursor-pointer disabled:opacity-50 transition-all"
                >
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="contacted">Contacted</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                  <i class="fas fa-chevron-down text-xs"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Drawer Body (Details) -->
          <div class="flex-1 overflow-y-auto p-6 custom-scrollbar bg-white">
            
            <div v-if="isUpdatingStatus" class="absolute inset-0 bg-white/50 backdrop-blur-sm z-10 flex items-center justify-center">
              <div class="bg-slate-900 text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
                <i class="fas fa-circle-notch fa-spin"></i> Updating Status...
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6">
              <template v-for="(value, key) in selectedRecord" :key="key">
                <div v-if="key !== 'id' && key !== 'created_at' && key !== 'status'" class="group">
                  <dt class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">{{ formatKey(key) }}</dt>
                  <dd class="text-sm font-semibold text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:border-slate-200 transition-colors break-words min-h-[46px]">
                    <span v-if="(key === 'documents' || key.startsWith('doc_') || key.endsWith('_doc') || key.includes('document')) && getDocuments(value, activeTab).length > 0">
                      <div class="flex flex-col gap-2">
                        <a v-for="(doc, i) in getDocuments(value, activeTab)" :key="i" href="#" @click.prevent="downloadDocument(doc.path, activeTab)" class="inline-flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-accent hover:bg-slate-50 hover:shadow-sm transition-all group/link">
                          <div class="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center group-hover/link:bg-accent group-hover/link:text-white transition-colors shrink-0">
                            <i v-if="downloadingDocs[doc.path]" class="fas fa-spinner fa-spin"></i>
                            <i v-else class="fas fa-file-pdf"></i>
                          </div>
                          <span class="truncate" :title="doc.name">{{ doc.name }}</span>
                          <i class="fas fa-download ml-auto text-slate-300 group-hover/link:text-accent"></i>
                        </a>
                      </div>
                    </span>
                    <span v-else-if="typeof value === 'boolean'">
                      <i :class="value ? 'fas fa-check text-success' : 'fas fa-times text-danger'"></i>
                    </span>
                    <span v-else-if="Array.isArray(value)">
                      <ul class="list-disc pl-4 space-y-1">
                        <li v-for="item in value" :key="item">{{ item }}</li>
                      </ul>
                    </span>
                    <span v-else>{{ value || '—' }}</span>
                  </dd>
                </div>
              </template>
            </div>
          </div>
          
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref, onMounted, computed, h, watch } from 'vue'
import { useRouter } from 'vue-router'
import { createClient } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

// --- Status Badge Component ---
const StatusBadge = (props) => {
  const status = (props.status || 'pending').toLowerCase();
  const sizeClass = props.size === 'lg' ? 'px-3 py-1.5 text-xs' : 'px-2.5 py-1 text-[10px]';
  
  let colors = '';
  let icon = '';
  let label = '';
  
  switch(status) {
    case 'approved':
      colors = 'bg-success/10 text-success border border-success/20';
      icon = 'fas fa-check-circle';
      label = 'Approved';
      break;
    case 'rejected':
      colors = 'bg-danger/10 text-danger border border-danger/20';
      icon = 'fas fa-times-circle';
      label = 'Rejected';
      break;
    case 'in_progress':
      colors = 'bg-blue/10 text-blue border border-blue/20';
      icon = 'fas fa-sync-alt fa-spin';
      label = 'In Progress';
      break;
    case 'contacted':
      colors = 'bg-purple-500/10 text-purple-600 border border-purple-500/20';
      icon = 'fas fa-phone-alt';
      label = 'Contacted';
      break;
    case 'pending':
    default:
      colors = 'bg-warning/10 text-warning-dark border border-warning/30';
      icon = 'fas fa-clock';
      label = 'Pending';
  }

  return h('span', { class: `inline-flex items-center gap-1.5 font-bold uppercase tracking-wider rounded-md shadow-sm ${sizeClass} ${colors}` }, [
    h('i', { class: icon }),
    label
  ]);
};

// --- State ---
const router = useRouter()
const userEmail = ref('')
const userDisplayName = ref('')
const userInitials = ref('')
const loading = ref(true)
const isInitialLoad = ref(true)
const activeTab = ref('overview') // Default tab
const isMobileMenuOpen = ref(false)
const searchQuery = ref('')

function selectTab(tabId) {
  activeTab.value = tabId;
  isMobileMenuOpen.value = false;
}

const records = ref({})
const counts = ref({})
const selectedRecord = ref(null)
const selectedTable = ref(null)
const isUpdatingStatus = ref(false)

const applicationTabs = [
  { id: 'solar_applications', label: 'Solar Financing', shortLabel: 'Solar', icon: 'fas fa-solar-panel', color: 'bg-accent' },
  { id: 'smme_applications', label: 'SMME Funding', shortLabel: 'SMME', icon: 'fas fa-briefcase', color: 'bg-blue' },
  { id: 'home_loan_applications', label: 'Home Loans', shortLabel: 'Home Loans', icon: 'fas fa-home', color: 'bg-success' },
  { id: 'medical_aid_applications', label: 'Medical Aid', shortLabel: 'Medical Aid', icon: 'fas fa-heartbeat', color: 'bg-danger' },
  { id: 'diplomatic_applications', label: 'Diplomatic Desk', shortLabel: 'Diplomatic', icon: 'fas fa-globe', color: 'bg-purple-500' },
]

// Define table columns
const columns = {
  solar_applications: [
    { key: 'full_name', label: 'Applicant Name' },
    { key: 'business_name', label: 'Business' },
    { key: 'fin_option', label: 'Package' },
  ],
  smme_applications: [
    { key: 'business_name', label: 'Business' },
    { key: 'industry', label: 'Industry' },
    { key: 'monthly_turnover', label: 'Turnover' },
  ],
  home_loan_applications: [
    { key: 'full_name', label: 'Applicant' },
    { key: 'property_type', label: 'Property Type' },
    { key: 'purchase_price', label: 'Price' },
  ],
  medical_aid_applications: [
    { key: 'first_name', label: 'First Name' },
    { key: 'last_name', label: 'Last Name' },
    { key: 'selected_scheme', label: 'Scheme' },
  ],
  diplomatic_applications: [
    { key: 'full_name', label: 'Diplomat Name' },
    { key: 'mission_embassy', label: 'Embassy/Mission' },
    { key: 'insurance_type', label: 'Coverage' },
  ]
}

function getBucketNameForTab(tabId) {
  if (tabId === 'home_loan_applications') return 'home-loan-documents';
  if (tabId === 'smme_applications') return 'smme-documents';
  if (tabId === 'diplomatic_applications') return 'diplomatic-documents';
  return 'Documents'; // Default fallback bucket
}

const downloadingDocs = ref({})

async function downloadDocument(path, tabId) {
  if (path.startsWith('http')) {
    window.open(path, '_blank');
    return;
  }
  
  const bucketName = getBucketNameForTab(tabId);
  downloadingDocs.value[path] = true;
  
  try {
    const { data, error } = await supabase.storage.from(bucketName).createSignedUrl(path, 60); // Valid for 60 seconds
    if (error) {
      console.error('Error creating signed URL:', error);
      alert('Could not download document. The file may have been deleted or bucket permissions are restricted.');
      return;
    }
    if (data && data.signedUrl) {
      window.open(data.signedUrl, '_blank');
    }
  } catch (e) {
    console.error('Download error:', e);
  } finally {
    downloadingDocs.value[path] = false;
  }
}

function getDocuments(value, tabId) {
  if (!value) return [];
  
  let rawItems = [];
  if (Array.isArray(value)) {
    rawItems = value;
  } else if (typeof value === 'string') {
    let str = value.trim();
    // Check for Postgres array syntax: {url1, url2}
    if (str.startsWith('{') && str.endsWith('}')) {
      str = str.substring(1, str.length - 1);
      if (str) {
        rawItems = str.split(',');
      }
    }
    // Check for JSON array syntax
    else if (str.startsWith('[') && str.endsWith(']')) {
      try {
        const parsed = JSON.parse(str);
        if (Array.isArray(parsed)) rawItems = parsed;
      } catch (e) {}
    }
    // Single string
    else if (str !== '') {
      rawItems = [str];
    }
  }
  
  return rawItems
    .filter(Boolean)
    .map(item => {
      let cleanPath = typeof item === 'string' ? item.trim() : String(item);
      if (cleanPath.startsWith('"') && cleanPath.endsWith('"')) {
        cleanPath = cleanPath.substring(1, cleanPath.length - 1);
      }
      if (cleanPath.startsWith('/')) cleanPath = cleanPath.substring(1);
      return {
        path: cleanPath,
        name: getDocumentName(cleanPath)
      }
    });
}

function getDocumentName(url) {
  try {
    const decoded = decodeURIComponent(url);
    const parts = decoded.split('/');
    let fileName = parts[parts.length - 1];
    
    if (fileName.includes('?')) {
      fileName = fileName.split('?')[0];
    }
    
    // Some filenames might start with a timestamp like "167234234234_filename.pdf" 
    // We can try to strip it if we want, but just showing the full filename is usually fine
    return fileName || 'Document';
  } catch (e) {
    return 'Document';
  }
}

// --- Computed ---
const currentActiveTabObj = computed(() => applicationTabs.find(t => t.id === activeTab.value) || {})

const activeTabTitle = computed(() => {
  if (activeTab.value === 'overview') return 'Dashboard Overview'
  if (activeTab.value === 'settings') return 'Settings & Profile'
  return currentActiveTabObj.value.label
})

const activeTabSubtitle = computed(() => {
  if (activeTab.value === 'overview') return 'High-level metrics and recent activity'
  if (activeTab.value === 'settings') return 'Manage your account and users'
  return `Manage incoming applications for ${currentActiveTabObj.value.label}`
})

const currentData = computed(() => {
  let data = records.value[activeTab.value] || []
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    data = data.filter(row => {
      // search across all string values in the row
      return Object.values(row).some(val => 
        val && typeof val === 'string' && val.toLowerCase().includes(query)
      )
    })
  }
  
  return data
})

const isAppTabActive = computed(() => {
  return activeTab.value !== 'overview' && activeTab.value !== 'settings'
})

const totalPendingCount = computed(() => {
  return Object.values(counts.value).reduce((a, b) => a + b, 0)
})

// Analytics Computed Properties
const allApplicationsFlat = computed(() => {
  let all = []
  for (const tabId in records.value) {
    if (records.value[tabId]) {
      const mapped = records.value[tabId].map(app => ({ ...app, _tableName: tabId }))
      all = all.concat(mapped)
    }
  }
  return all.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
})

const totalApplications = computed(() => allApplicationsFlat.value.length)
const totalPending = computed(() => allApplicationsFlat.value.filter(a => !a.status || a.status === 'pending').length)
const totalApproved = computed(() => allApplicationsFlat.value.filter(a => a.status === 'approved').length)

const recentApplicationsCount = computed(() => {
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
  return allApplicationsFlat.value.filter(a => new Date(a.created_at) >= sevenDaysAgo).length
})

const allRecentApplications = computed(() => {
  return allApplicationsFlat.value.slice(0, 7) // Top 7 most recent
})

function getPercentage(count) {
  if (totalApplications.value === 0) return 0
  return ((count || 0) / totalApplications.value) * 100
}

// --- Lifecycle ---
onMounted(async () => {
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    router.push('/admin/login')
    return
  }
  
  userEmail.value = session.user.email
  
  // Try to fetch profile to get display_name
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single()
    
  if (profile && profile.display_name) {
    userDisplayName.value = profile.display_name
    userInitials.value = profile.display_name.substring(0, 2).toUpperCase()
  } else {
    // Fallback to metadata or email
    userDisplayName.value = session.user.user_metadata?.display_name || 'Admin User'
    userInitials.value = (session.user.user_metadata?.display_name || session.user.email).substring(0, 2).toUpperCase()
  }
  
  profileForm.value.email = session.user.email
  profileForm.value.display_name = userDisplayName.value
  
  await fetchData()
  isInitialLoad.value = false
})

watch(activeTab, (newTab) => {
  if (newTab === 'settings') {
    fetchAdminUsers()
  }
})

// --- Data Fetching ---
async function fetchData() {
  loading.value = true
  
  try {
    for (const tab of applicationTabs) {
      const { data, error, count } = await supabase
        .from(tab.id)
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
      
      if (!error && data) {
        records.value[tab.id] = data
        counts.value[tab.id] = count
      }
    }
  } catch (err) {
    console.error('Error fetching data:', err)
  } finally {
    loading.value = false
  }
}

// --- Status Update ---
async function updateStatus(newStatus) {
  if (!selectedRecord.value || !selectedTable.value) return;
  
  isUpdatingStatus.value = true;
  const recordId = selectedRecord.value.id;
  
  try {
    const { error } = await supabase
      .from(selectedTable.value)
      .update({ status: newStatus })
      .eq('id', recordId);
      
    if (error) throw error;
    
    // Optimistically update UI
    selectedRecord.value.status = newStatus;
    
    // Update local state in the main array
    const recordIndex = records.value[selectedTable.value].findIndex(r => r.id === recordId);
    if (recordIndex !== -1) {
      records.value[selectedTable.value][recordIndex].status = newStatus;
    }
    
  } catch (err) {
    console.error('Failed to update status:', err);
    alert('Failed to update status. Please try again.');
  } finally {
    isUpdatingStatus.value = false;
  }
}

// --- UI Helpers ---
function viewDetails(row, tableName) {
  selectedRecord.value = { ...row }
  selectedTable.value = tableName
  document.body.style.overflow = 'hidden' // Prevent bg scrolling
}

function closeDrawer() {
  selectedRecord.value = null
  selectedTable.value = null
  document.body.style.overflow = ''
}

function formatKey(key) {
  return key.replace(/_/g, ' ')
}

function formatShortDate(dateStr) {
  if (!dateStr) return '-'
  const d = new Date(dateStr)
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
}

function formatTime(dateStr) {
  if (!dateStr) return '-'
  const d = new Date(dateStr)
  return d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
}

function formatDetailedDate(dateStr) {
  if (!dateStr) return '-'
  const d = new Date(dateStr)
  return d.toLocaleString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })
}

function formatTimeAgo(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + "y ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + "m ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + "d ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hr ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " min ago";
  return "Just now";
}

// Helper to get primary display name based on table
function getPrimaryIdentifier(record, tableName) {
  if (tableName === 'solar_applications') return record.business_name || record.full_name;
  if (tableName === 'smme_applications') return record.biz_name;
  if (tableName === 'home_loan_applications') return record.full_name;
  if (tableName === 'medical_aid_applications') return `${record.first_name} ${record.last_name}`;
  if (tableName === 'diplomatic_applications') return record.mission_name;
  return 'Application';
}

function getCategoryName(tableName) {
  const tab = applicationTabs.find(t => t.id === tableName);
  return tab ? tab.label : 'Unknown';
}

function getCategoryIcon(tableName) {
  const tab = applicationTabs.find(t => t.id === tableName);
  return tab ? tab.icon : 'fas fa-file-alt';
}

function getCategoryColor(tableName) {
  const tab = applicationTabs.find(t => t.id === tableName);
  if (!tab) return 'bg-slate-100 text-slate-500';
  return `${tab.color}/10 text-${tab.color.replace('bg-', '')}`; 
  // Quick hack to convert bg-accent to text-accent. 
  // For Tailwind JIT to work with dynamic classes safely, it's better to explicitly map them if they are complex, 
  // but for simple colors it might work if classes are used elsewhere.
}

async function handleLogout() {
  await supabase.auth.signOut()
  router.push('/admin/login')
}

// --- Profile Update Logic ---
const profileForm = ref({ email: '', password: '', display_name: '' })
const profileLoading = ref(false)
const profileMsg = ref('')
const profileSuccess = ref(false)

async function handleUpdateProfile() {
  profileLoading.value = true
  profileMsg.value = ''
  profileSuccess.value = false
  
  const updates = {}
  if (profileForm.value.email && profileForm.value.email !== userEmail.value) {
    updates.email = profileForm.value.email
  }
  if (profileForm.value.password) {
    updates.password = profileForm.value.password
  }

  // Update Auth layer
  if (Object.keys(updates).length > 0) {
    const { data: authData, error: authError } = await supabase.auth.updateUser({
      ...updates,
      data: { display_name: profileForm.value.display_name }
    })
    if (authError) {
      profileMsg.value = authError.message
      profileLoading.value = false
      return
    }
    if (authData?.user) {
      userEmail.value = authData.user.email
      
      // Update local state for display name
      userDisplayName.value = profileForm.value.display_name || 'Admin User'
      userInitials.value = userDisplayName.value.substring(0, 2).toUpperCase()
    }
  }

  profileLoading.value = false
  profileSuccess.value = true
  profileMsg.value = 'Profile updated successfully.'
  profileForm.value.password = ''
}

// --- Admin User Management ---
const adminUsers = ref([])
const adminUsersLoading = ref(false)
const inviteForm = ref({ email: '', display_name: '' })
const inviteLoading = ref(false)
const inviteMsg = ref('')
const inviteSuccess = ref(false)

async function fetchAdminUsers() {
  adminUsersLoading.value = true
  const { data, error } = await supabase.from('profiles').select('*').order('created_at', { ascending: false })
  if (!error && data) {
    adminUsers.value = data
  }
  adminUsersLoading.value = false
}

async function handleInviteUser() {
  inviteLoading.value = true
  inviteMsg.value = ''
  inviteSuccess.value = false
  
  // Secondary client so current admin doesn't get logged out!
  const tempClient = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY,
    { auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false } }
  )
  
  const { error } = await tempClient.auth.signInWithOtp({
    email: inviteForm.value.email,
    options: {
      data: {
        display_name: inviteForm.value.display_name
      }
    }
  })
  
  inviteLoading.value = false
  
  if (error) {
    inviteMsg.value = error.message
  } else {
    inviteSuccess.value = true
    inviteMsg.value = `Magic link sent to ${inviteForm.value.email}!`
    inviteForm.value = { email: '', display_name: '' }
    // Add small delay to let Postgres trigger fire
    setTimeout(() => {
      fetchAdminUsers()
    }, 1000)
  }
}
</script>

<style scoped>
/* Custom Scrollbar for inner areas */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #cbd5e1; /* slate-300 */
  border-radius: 20px;
}
.custom-scrollbar:hover::-webkit-scrollbar-thumb {
  background-color: #94a3b8; /* slate-400 */
}

/* Hide scrollbar for nav */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Animations */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Drawer Transitions */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-active > div:last-child {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-fade-leave-active > div:last-child {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-fade-enter-from > div:first-child,
.slide-fade-leave-to > div:first-child {
  opacity: 0;
}
.slide-fade-enter-from > div:last-child {
  transform: translateX(100%);
}
.slide-fade-leave-to > div:last-child {
  transform: translateX(100%);
}
</style>
