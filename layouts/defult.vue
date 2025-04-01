<template>
  <div class="min-h-screen bg-white">
    <nav class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-4 py-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <Icon icon="material-symbols:menu-rounded" class="h-6 w-6 md:hidden" />
              <span class="ml-4 text-xl font-bold text-gray-800">ShopNow</span>
            </div>
            
            <div class="hidden md:flex items-center space-x-8">
              <NuxtLink to="/" class="text-gray-600 hover:text-gray-800 font-semibold">Home</NuxtLink>
              <NuxtLink to="/shop" class="text-gray-600 hover:text-gray-800 font-semibold">Shop</NuxtLink>
              <NuxtLink  to="/categories"  class="text-gray-600 hover:text-gray-800 font-semibold">Categories</NuxtLink>
              <NuxtLink to="/products" class="text-gray-600 hover:text-gray-800 font-semibold">Products</NuxtLink>
              <!-- <a href="#" class="text-gray-600 hover:text-gray-800">Home</a>
              <a href="#" class="text-gray-600 hover:text-gray-800">Shop</a>
              <a href="#" class="text-gray-600 hover:text-gray-800">Categories</a>
              <a href="#" class="text-gray-600 hover:text-gray-800">About</a> -->
            </div>
            
            <div class="flex items-center space-x-4">
              <Icon icon="material-symbols:search-rounded" class="h-5 w-5 text-gray-600"/>
              <Icon icon="mdi:heart-outline" class="h-5 w-5 text-gray-600" />
              <Icon icon="iconamoon:shopping-card-bold" class="h-5 w-5 text-gray-600" />
            </div>
          </div>
        </div>
      </nav>
    
    <div>
      <NuxtPage />
    </div>
    <div>
      <footer class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 py-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-300">
            <div>
              <h3 class="text-lg font-semibold mb-4">About Us</h3>
              <p class="text-sm">Your trusted destination for online shopping.</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-4">Customer Service</h3>
              <ul class="space-y-2 text-sm">
                <li>Contact Us</li>
                <li>Shipping Policy</li>
                <li>Returns & Exchanges</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
              <ul class="space-y-2 text-sm">
                <li>Shop</li>
                <li>Categories</li>
                <li>New Arrivals</li>
                <li>Sale</li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-4">Connect With Us</h3>
              <div class="flex space-x-4">
                <Icon icon="stash:social-facebook-solid" width="24" height="24" />
                <Icon icon="simple-line-icons:social-instagram"  width="24" height="24" />
                <Icon icon="uit:social-media-logo" width="24" height="24" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
