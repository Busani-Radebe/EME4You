import React from 'react'

const Steps = () => {
  return (
    <section class="p-6 dark:bg-gray-100 dark:text-gray-800">
	<div class="container mx-auto">
		<span class="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-violet-600">Discover More</span>
		<h2 class="text-5xl font-bold text-center dark:text-gray-900">Other Services</h2>
		<p class="max-w-2xl mx-auto mt-4 text-center text-gray-600">Transform your digital presence with our comprehensive suite of creative and technical solutions.</p>
		<div class="grid gap-6 my-16 lg:grid-cols-3">
			<div class="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
				<div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-pulse"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
				</div>
				<h3 class="text-2xl font-bold text-gray-900">Website Design</h3>
				<p class="text-gray-700">
					We craft visually stunning, lightning-fast websites that captivate your audience from the first click. Our responsive designs adapt seamlessly across all devices, ensuring your digital storefront is always open for business.
				</p>
				<a href="#" class="inline-flex items-center text-violet-600 hover:text-violet-800">
					Learn more
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
				</a>
			</div>
			<div class="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
				<div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-spin"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line></svg>
				</div>
				<h3 class="text-2xl font-bold text-gray-900">Graphic Design</h3>
				<p class="text-gray-700">
					From eye-catching logos to comprehensive brand identities, our visual storytellers transform your ideas into stunning visual assets. We create designs that not only look amazing but strategically communicate your brand's unique value.
				</p>
				<a href="#" class="inline-flex items-center text-violet-600 hover:text-violet-800">
					Learn more
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
				</a>
			</div>
			<div class="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
				<div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-bounce"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>
				</div>
				<h3 class="text-2xl font-bold text-gray-900">Mobile App Development</h3>
				<p class="text-gray-700">
					We build intuitive, feature-rich applications that engage users across iOS and Android platforms. Our development team creates seamless experiences that keep users coming back, driving engagement and boosting your bottom line.
				</p>
				<a href="#" class="inline-flex items-center text-violet-600 hover:text-violet-800">
					Learn more
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
				</a>
			</div>
		</div>
	</div>
</section>
  )
}

export default Steps;