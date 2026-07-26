<template>
  <div class="min-h-screen bg-slate-50 flex flex-col md:flex-row overflow-hidden text-slate-800">
    
    <!-- Mobile Header -->
    <header class="md:hidden bg-slate-900 text-white p-4 flex justify-between items-center z-50 sticky top-0 shadow-lg">
      <router-link to="/" class="flex items-center gap-3">
        <img src="/img/NFS_Insure_Logo_Off-white_Mustard_Combination@2x.png" alt="NFS Insure" class="h-6" />
      </router-link>
      <button @click="handleLogout" class="text-sm font-semibold text-slate-300 hover:text-white">
        Logout
      </button>
    </header>

    <!-- Desktop Sidebar / Mobile Bottom Nav -->
    <nav class="
      fixed bottom-0 w-full z-40 bg-white border-t border-slate-200 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]
      md:relative md:w-72 md:border-t-0 md:border-r md:h-screen md:flex md:flex-col md:bg-slate-900 md:text-slate-300 md:shadow-none
    ">
      <div class="hidden md:flex p-6 items-center gap-4 border-b border-slate-800">
        <router-link to="/">
          <img src="/img/NFS_Insure_Logo_Off-white_Mustard_Combination@2x.png" alt="NFS Insure" class="h-8" />
        </router-link>
      </div>

      <!-- Navigation Links -->
      <div class="flex md:flex-col overflow-x-auto md:overflow-y-auto flex-1 p-2 md:p-4 gap-1 md:gap-2 snap-x scrollbar-hide items-center md:items-stretch">
        
        <button 
          @click="activeTab = 'overview'"
          class="flex-shrink-0 flex md:justify-start items-center gap-2 md:gap-3 p-3 md:px-4 md:py-3 rounded-xl transition-all duration-300 relative group min-w-[80px] md:min-w-0"
          :class="activeTab === 'overview' ? 'bg-accent/10 text-accent md:bg-accent md:text-white shadow-sm' : 'text-slate-500 md:text-slate-400 hover:bg-slate-100 md:hover:bg-slate-800'"
        >
          <i class="fas fa-chart-pie text-lg md:w-6 text-center transition-transform group-hover:scale-110"></i>
          <span class="text-xs md:text-sm font-bold md:font-semibold whitespace-nowrap">Overview</span>
        </button>

        <div class="hidden md:block my-4">
          <h3 class="px-4 text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Applications</h3>
        </div>

        <button 
          v-for="tab in applicationTabs" :key="tab.id"
          @click="activeTab = tab.id"
          class="flex-shrink-0 flex justify-between items-center p-3 md:px-4 md:py-3 rounded-xl transition-all duration-300 relative group min-w-[90px] md:min-w-0"
          :class="activeTab === tab.id ? 'bg-accent/10 text-accent md:bg-white/10 md:text-white shadow-sm' : 'text-slate-500 md:text-slate-400 hover:bg-slate-100 md:hover:bg-slate-800 md:hover:text-white'"
        >
          <div class="flex items-center gap-2 md:gap-3 flex-col md:flex-row">
            <i :class="tab.icon" class="text-lg md:w-6 text-center transition-transform group-hover:scale-110"></i>
            <span class="text-[10px] md:text-sm font-bold md:font-semibold whitespace-nowrap">{{ tab.shortLabel || tab.label }}</span>
          </div>
          <span v-if="counts[tab.id] > 0" class="hidden md:inline-flex bg-accent text-white text-[10px] font-bold py-0.5 px-2 rounded-full min-w-[20px] justify-center items-center shadow-sm">{{ counts[tab.id] }}</span>
          
          <!-- Mobile Badge Dot -->
          <span v-if="counts[tab.id] > 0 && activeTab !== tab.id" class="md:hidden absolute top-2 right-2 w-2 h-2 bg-accent rounded-full"></span>
        </button>

        <div class="hidden md:block my-4">
          <h3 class="px-4 text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Settings</h3>
        </div>

        <button 
          @click="activeTab = 'settings'"
          class="hidden md:flex flex-shrink-0 items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group"
          :class="activeTab === 'settings' ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'"
        >
          <i class="fas fa-cog w-6 text-center transition-transform group-hover:rotate-90"></i>
          <span class="text-sm font-semibold">Settings</span>
        </button>

      </div>

      <!-- Desktop Logout -->
      <div class="hidden md:block p-4 border-t border-slate-800">
        <div class="flex items-center gap-3 px-4 mb-4">
          <div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-accent text-xs font-bold shrink-0">
            {{ userInitials }}
          </div>
          <div class="overflow-hidden">
            <p class="text-xs font-medium text-slate-400 truncate">{{ userEmail }}</p>
          </div>
        </div>
        <button @click="handleLogout" class="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors text-sm font-semibold shadow-sm">
          <i class="fas fa-sign-out-alt"></i> Logout
        </button>
      </div>
    </nav>

    <!-- Main Content Area -->
    <main class="flex-1 flex flex-col h-screen overflow-hidden bg-[#f4f7f9] relative pb-20 md:pb-0">
      
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
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            
            <div class="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col relative overflow-hidden group">
              <div class="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-accent/20 to-transparent rounded-full group-hover:scale-150 transition-transform duration-700 ease-out"></div>
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-900/20">
                  <i class="fas fa-inbox text-xl"></i>
                </div>
                <div>
                  <h3 class="text-slate-500 font-semibold text-sm">Total Applications</h3>
                </div>
              </div>
              <div class="text-4xl font-black text-slate-800 tracking-tight">{{ totalApplications }}</div>
            </div>

            <div class="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col relative overflow-hidden group">
              <div class="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-warning/20 to-transparent rounded-full group-hover:scale-150 transition-transform duration-700 ease-out"></div>
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-2xl bg-warning/10 text-warning flex items-center justify-center">
                  <i class="fas fa-clock text-xl"></i>
                </div>
                <div>
                  <h3 class="text-slate-500 font-semibold text-sm">Pending Review</h3>
                </div>
              </div>
              <div class="text-4xl font-black text-slate-800 tracking-tight">{{ totalPending }}</div>
            </div>

            <div class="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col relative overflow-hidden group">
              <div class="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-success/20 to-transparent rounded-full group-hover:scale-150 transition-transform duration-700 ease-out"></div>
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-2xl bg-success/10 text-success flex items-center justify-center">
                  <i class="fas fa-check-circle text-xl"></i>
                </div>
                <div>
                  <h3 class="text-slate-500 font-semibold text-sm">Approved</h3>
                </div>
              </div>
              <div class="text-4xl font-black text-slate-800 tracking-tight">{{ totalApproved }}</div>
            </div>

            <div class="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col relative overflow-hidden group">
              <div class="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-accent/20 to-transparent rounded-full group-hover:scale-150 transition-transform duration-700 ease-out"></div>
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                  <i class="fas fa-calendar-day text-xl"></i>
                </div>
                <div>
                  <h3 class="text-slate-500 font-semibold text-sm">Recent (7 Days)</h3>
                </div>
              </div>
              <div class="text-4xl font-black text-slate-800 tracking-tight">{{ recentApplicationsCount }}</div>
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
          <div class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-10 relative overflow-hidden">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-16 h-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center border border-blue-100 shadow-sm text-xl font-bold">
                {{ userInitials }}
              </div>
              <div>
                <h2 class="text-2xl font-black text-slate-800">My Profile</h2>
                <p class="text-slate-500 text-sm font-medium">Update your account information and password.</p>
              </div>
            </div>
            
            <form @submit.prevent="handleUpdateProfile" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Email Address</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i class="fas fa-envelope text-slate-400"></i>
                    </div>
                    <input v-model="profileForm.email" type="email" class="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-slate-700" />
                  </div>
                </div>
                
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">New Password (Leave blank to keep)</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i class="fas fa-lock text-slate-400"></i>
                    </div>
                    <input v-model="profileForm.password" type="password" minlength="6" class="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-slate-700" placeholder="••••••••" />
                  </div>
                </div>
              </div>
              
              <div v-if="profileMsg" :class="profileSuccess ? 'bg-success/10 text-success border-success/20' : 'bg-danger/10 text-danger border-danger/20'" class="text-sm font-bold p-4 rounded-xl border flex items-start gap-3">
                <i class="fas mt-0.5" :class="profileSuccess ? 'fa-check-circle' : 'fa-exclamation-circle'"></i>
                {{ profileMsg }}
              </div>
              
              <div class="flex justify-end">
                <button type="submit" :disabled="profileLoading" class="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 flex items-center gap-2">
                  <span v-if="profileLoading"><i class="fas fa-spinner fa-spin"></i> Saving...</span>
                  <span v-else><i class="fas fa-save"></i> Save Changes</span>
                </button>
              </div>
            </form>
          </div>

          <!-- User Management (Notice) -->
          <div class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-10 relative overflow-hidden group">
             <div class="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] flex items-center justify-center transition-transform group-hover:scale-110">
              <i class="fas fa-users-cog text-5xl text-accent/20 ml-8 mb-8"></i>
            </div>
            
            <h2 class="text-2xl font-black text-slate-800 mb-2">User Management</h2>
            <p class="text-slate-500 text-sm mb-6 font-medium max-w-2xl">Invite new administrators and manage existing users.</p>
            
            <div class="bg-blue-50 border border-blue-100 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div class="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <i class="fas fa-info-circle text-xl"></i>
              </div>
              <div>
                <h4 class="font-bold text-slate-800 mb-1">Backend Configuration Required</h4>
                <p class="text-sm text-slate-600 font-medium">For security reasons, directly listing all users and sending email invitations from the frontend dashboard requires a Supabase <code class="bg-white px-1.5 py-0.5 rounded text-xs text-blue-600 border border-blue-200">service_role</code> key. Because this frontend runs in the browser, exposing that key would give anyone full database access.</p>
                <div class="mt-4 flex flex-wrap gap-3">
                  <a href="https://supabase.com/dashboard/project/_/auth/users" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-md hover:bg-blue-700 transition-colors">
                    <i class="fas fa-external-link-alt"></i> Manage Users in Supabase
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- APPLICATION DATA TABLES -->
        <div v-else class="max-w-7xl mx-auto animate-fade-in-up">
          
          <!-- Filters / Search Bar placeholder -->
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div class="relative w-full md:w-96">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i class="fas fa-search text-slate-400"></i>
              </div>
              <input type="text" class="w-full pl-11 pr-4 py-3 rounded-full border-none shadow-sm bg-white focus:ring-2 focus:ring-accent outline-none text-sm font-medium placeholder-slate-400" placeholder="Search applications... (Coming soon)" disabled />
            </div>
            
            <div class="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              <span class="text-xs font-bold text-slate-400 uppercase mr-2 shrink-0">Filter:</span>
              <button class="px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold shadow-sm shrink-0">All</button>
              <button class="px-3 py-1.5 rounded-full bg-white text-slate-500 hover:bg-slate-100 text-xs font-bold shadow-sm shrink-0 border border-slate-100">Pending</button>
              <button class="px-3 py-1.5 rounded-full bg-white text-slate-500 hover:bg-slate-100 text-xs font-bold shadow-sm shrink-0 border border-slate-100">Approved</button>
            </div>
          </div>

          <div class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
            
            <div v-if="currentData.length === 0" class="p-16 text-center text-slate-400">
              <div class="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 border border-slate-100 shadow-inner">
                <i :class="currentActiveTabObj.icon"></i>
              </div>
              <h3 class="text-lg font-bold text-slate-700 mb-1">No Applications Found</h3>
              <p class="text-sm font-medium">There are currently no submissions for this category.</p>
            </div>
            
            <div v-else class="overflow-x-auto custom-scrollbar">
              <table class="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr class="bg-slate-50/80 border-b border-slate-200">
                    <th class="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Date Received</th>
                    <th v-for="col in columns[activeTab]" :key="col.key" class="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {{ col.label }}
                    </th>
                    <th class="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Status</th>
                    <th class="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right rounded-tr-3xl">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr v-for="row in currentData" :key="row.id" 
                      @click="viewDetails(row, activeTab)"
                      class="hover:bg-accent/5 transition-colors cursor-pointer group">
                    <td class="py-4 px-6">
                      <div class="text-sm font-bold text-slate-700">{{ formatShortDate(row.created_at) }}</div>
                      <div class="text-xs font-semibold text-slate-400">{{ formatTime(row.created_at) }}</div>
                    </td>
                    <td v-for="col in columns[activeTab]" :key="col.key" class="py-4 px-6">
                      <span class="text-sm font-medium text-slate-800">{{ row[col.key] || '-' }}</span>
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

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              <template v-for="(value, key) in selectedRecord" :key="key">
                <div v-if="key !== 'id' && key !== 'created_at' && key !== 'status'" class="group">
                  <dt class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">{{ formatKey(key) }}</dt>
                  <dd class="text-sm font-semibold text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:border-slate-200 transition-colors break-words min-h-[46px]">
                    <span v-if="typeof value === 'boolean'">
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
import { ref, onMounted, computed, h } from 'vue'
import { useRouter } from 'vue-router'
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
const userInitials = ref('')
const loading = ref(true)
const isInitialLoad = ref(true)
const activeTab = ref('overview') // Default tab
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
    { key: 'owner_name', label: 'Owner Name' },
    { key: 'biz_name', label: 'Business' },
    { key: 'funding_amount', label: 'Requested Amount' },
  ],
  home_loan_applications: [
    { key: 'full_name', label: 'Applicant Name' },
    { key: 'purchase_price', label: 'Purchase Price' },
    { key: 'property_type', label: 'Type' },
  ],
  medical_aid_applications: [
    { key: 'first_name', label: 'First Name' },
    { key: 'last_name', label: 'Last Name' },
    { key: 'selected_scheme', label: 'Selected Scheme' },
  ],
  diplomatic_applications: [
    { key: 'rep_name', label: 'Representative' },
    { key: 'mission_name', label: 'Mission / Embassy' },
    { key: 'country', label: 'Country' },
  ],
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
  return records.value[activeTab.value] || []
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
  profileForm.value.email = session.user.email
  userInitials.value = session.user.email.substring(0, 2).toUpperCase()
  await fetchData()
  isInitialLoad.value = false
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
const profileForm = ref({ email: '', password: '' })
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

  if (Object.keys(updates).length === 0) {
    profileMsg.value = 'No changes to save.'
    profileLoading.value = false
    return
  }

  const { data, error } = await supabase.auth.updateUser(updates)

  profileLoading.value = false

  if (error) {
    profileMsg.value = error.message
  } else {
    profileSuccess.value = true
    profileMsg.value = 'Profile updated successfully. If you changed your email, please check your inbox for a confirmation link.'
    userEmail.value = data.user.email
    userInitials.value = data.user.email.substring(0, 2).toUpperCase()
    profileForm.value.password = '' // Clear password after successful update
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
