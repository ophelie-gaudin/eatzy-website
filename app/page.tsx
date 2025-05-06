'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
	ArrowRight,
	Download,
	ShoppingBag,
	Calendar,
	Apple,
	AlertCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { ScrollAnimation } from '@/components/scroll-animation'
import { AnimatedTimeline } from '@/components/animated-timeline'

export default function Home() {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<div className="flex min-h-screen flex-col">
			<header className="sticky top-0 z-50 w-full border-b bg-white">
				<div className="container flex h-16 items-center justify-between">
					<div className="flex items-center gap-2">
						<Link href="/" className="text-xl font-bold">
							Eatzy
						</Link>
					</div>
					<nav className="hidden md:flex gap-6">
						<Link
							href="#features"
							className="text-sm font-medium hover:underline"
						>
							Features
						</Link>
						<Link
							href="#how-it-works"
							className="text-sm font-medium hover:underline"
						>
							How It Works
						</Link>
						<Link
							href="#download"
							className="text-sm font-medium hover:underline"
						>
							Download
						</Link>
						<Link
							href="#how-to-use"
							className="text-sm font-medium hover:underline"
						>
							How to Use
						</Link>
					</nav>
					<Link href="#download">
						<Button className="bg-[#EBC48B] hover:bg-[#e0b673] text-black">
							Get Started
						</Button>
					</Link>
				</div>
			</header>
			<main className="flex-1">
				<section className="pt-20 lg:pt-0 lg:!pb-0 bg-gradient-to-b from-[#FFF8EB] to-white">
					<div className="container">
						<div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
							{/* Mobile order: text first, image second */}
							<div className="order-2 md:order-1 md:w-1/2">
								<ScrollAnimation
									animation="zoom-in"
									delay={600}
								>
									<div className="relative w-full overflow-hidden mt-20 lg:mt-10">
										<Image
											src="/images/eatzy-hero.png"
											width={1200}
											height={800}
											alt="Eatzy app screenshots showing meal planning, recipes, and shopping lists"
											className="rounded-lg object-cover"
											style={{
												objectPosition: 'center',
												objectFit: 'cover',
											}}
										/>
									</div>
								</ScrollAnimation>
							</div>

							{/* Mobile order: text first, image second */}
							<div className="order-1 md:order-2 md:w-1/2 text-center md:text-left">
								<ScrollAnimation animation="fade-down">
									<h1 className="text-6xl md:text-8xl font-bold tracking-tight">
										<span className="text-[#EBC48B]">
											Eatzy{' '}
										</span>
										<br />
										does it
									</h1>
								</ScrollAnimation>

								<ScrollAnimation
									animation="fade-up"
									delay={200}
								>
									<p className="mt-6 text-lg text-gray-600">
										Eatzy creates personalized meal plans
										with detailed recipes and convenient
										shopping lists based on your diet,
										allergies, and preferences. Plan your
										meals effortlessly and eat healthier.
									</p>
								</ScrollAnimation>

								<ScrollAnimation
									animation="fade-up"
									delay={400}
								>
									<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
										<Link href="#download">
											<Button className="bg-[#EBC48B] hover:bg-[#e0b673] text-black w-full sm:w-auto">
												Download Now{' '}
												<ArrowRight className="ml-2 h-4 w-4" />
											</Button>
										</Link>
										<Link href="#how-to-use">
											<Button
												variant="outline"
												className="w-full sm:w-auto"
											>
												Learn More
											</Button>
										</Link>
									</div>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</section>

				<section id="features" className="py-20 lg:py-28 bg-white">
					<div className="container px-6 md:px-8 lg:px-12 max-w-screen-xl mx-auto">
						<ScrollAnimation animation="fade-up">
							<h2 className="text-3xl md:text-4xl font-bold text-center">
								Why Choose Eatzy?
							</h2>
						</ScrollAnimation>

						<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
							<ScrollAnimation animation="fade-up" delay={100}>
								<div className="flex flex-col items-center text-center p-6 rounded-lg border hover:border-[#EBC48B] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-white">
									<div className="h-12 w-12 rounded-full bg-[#FFF8EB] flex items-center justify-center mb-4 animate-bounce">
										<Calendar className="h-6 w-6 text-[#EBC48B]" />
									</div>
									<h3 className="text-xl font-semibold">
										Multi-Day Meal Plans
									</h3>
									<p className="mt-2 text-gray-600">
										Plan your meals for multiple days in
										advance, saving you time and reducing
										stress.
									</p>
								</div>
							</ScrollAnimation>

							<ScrollAnimation animation="fade-up" delay={300}>
								<div className="flex flex-col items-center text-center p-6 rounded-lg border hover:border-[#EBC48B] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-white">
									<div className="h-12 w-12 rounded-full bg-[#FFF8EB] flex items-center justify-center mb-4 animate-pulse">
										<AlertCircle className="h-6 w-6 text-[#EBC48B]" />
									</div>
									<h3 className="text-xl font-semibold">
										Dietary Restrictions
									</h3>
									<p className="mt-2 text-gray-600">
										Customize your meal plans based on your
										diet, allergies, and personal
										preferences.
									</p>
								</div>
							</ScrollAnimation>

							<ScrollAnimation animation="fade-up" delay={500}>
								<div className="flex flex-col items-center text-center p-6 rounded-lg border hover:border-[#EBC48B] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-white">
									<div className="h-12 w-12 rounded-full bg-[#FFF8EB] flex items-center justify-center mb-4 animate-spin-slow">
										<ShoppingBag className="h-6 w-6 text-[#EBC48B]" />
									</div>
									<h3 className="text-xl font-semibold">
										Smart Shopping Lists
									</h3>
									<p className="mt-2 text-gray-600">
										Get automatically generated shopping
										lists based on your meal plans for
										efficient grocery shopping.
									</p>
								</div>
							</ScrollAnimation>
						</div>
					</div>
				</section>

				<section id="how-it-works" className="py-20 bg-[#FFF8EB]">
					<div className="container px-6 md:px-8 lg:px-12 max-w-screen-xl mx-auto">
						<ScrollAnimation animation="fade-up">
							<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
								How Eatzy Works
							</h2>
						</ScrollAnimation>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
							<ScrollAnimation animation="fade-up" delay={100}>
								<div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full">
									<h3 className="text-xl md:text-2xl font-semibold mb-3">
										Set Your Preferences
									</h3>
									<p className="text-gray-600">
										Tell Eatzy about your dietary needs,
										allergies, and which meals you want in
										your day.
									</p>
								</div>
							</ScrollAnimation>

							<ScrollAnimation animation="fade-up" delay={200}>
								<div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full">
									<h3 className="text-xl md:text-2xl font-semibold mb-3">
										Choose Your Duration
									</h3>
									<p className="text-gray-600">
										Select how many days you want to plan
										for - from a single day to a full week.
									</p>
								</div>
							</ScrollAnimation>

							<ScrollAnimation animation="fade-up" delay={300}>
								<div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full">
									<h3 className="text-xl md:text-2xl font-semibold mb-3">
										Get Your Meal Plan
									</h3>
									<p className="text-gray-600">
										Receive a personalized meal plan with
										breakfast, lunch, dinner, and snacks.
									</p>
								</div>
							</ScrollAnimation>

							<ScrollAnimation animation="fade-up" delay={400}>
								<div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full">
									<h3 className="text-xl md:text-2xl font-semibold mb-3">
										Shop With Ease
									</h3>
									<p className="text-gray-600">
										Use the generated shopping list to
										quickly get everything you need from the
										store.
									</p>
								</div>
							</ScrollAnimation>
						</div>
					</div>
				</section>

				<section id="download" className="py-20 bg-white">
					<div className="container">
						<div className="max-w-3xl mx-auto text-center">
							<h2 className="text-3xl md:text-4xl font-bold mb-6">
								Download Eatzy Today
							</h2>
							<p className="text-lg text-gray-600 mb-10">
								Start planning your meals and simplifying your
								grocery shopping with Eatzy. Available for both
								Android and iOS devices.
							</p>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								<div className="p-6 rounded-lg border bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
									<h3 className="text-xl font-semibold flex items-center justify-center gap-2 mb-4">
										<Download className="h-5 w-5 text-[#EBC48B]" />{' '}
										Android Download
									</h3>
									<p className="text-gray-600 mb-4">
										Download the Eatzy app directly to your
										Android device.
									</p>
									<ol className="list-decimal list-inside space-y-1 text-gray-600 !text-left">
										<li>Click the download button below</li>
										<li>
											Select "Open in browser" when
											prompted
										</li>
										<li>CLick on "Download"</li>
										<li>Allow permissions if requested</li>
										<li>
											Open the downloaded APK file to
											install
										</li>
									</ol>
									<a
										href="https://www.dropbox.com/scl/fi/zu2dhncifvl096s0q53w9/eatzy-android.apk?rlkey=a9ntrn6nk1m0krct9rtgj010b&st=8wpr3mhz&dl=0"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Button className="w-full bg-[#EBC48B] hover:bg-[#e0b673] text-black mt-4">
											Download for Android
										</Button>
									</a>
								</div>

								<div className="p-6 rounded-lg border bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
									<h3 className="text-xl font-semibold flex items-center justify-center gap-2 mb-4">
										<Apple className="h-5 w-5 text-[#EBC48B]" />{' '}
										iOS Download
									</h3>
									<p className="text-gray-600 mb-6">
										The iOS version of Eatzy is currently in
										development.
									</p>
									<div className="text-center p-4 bg-gray-50 rounded-md">
										<p className="text-sm font-medium text-gray-500">
											Coming Soon
										</p>
										<p className="mt-2 text-gray-600">
											We're working hard to bring Eatzy to
											iOS devices. Please check back later
											or sign up for our newsletter to be
											notified when it becomes available.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* GSAP Animated Timeline */}
				<AnimatedTimeline />
			</main>
			<footer className="py-6 bg-[#FFF8EB] border-t border-[#EBC48B]">
				<div className="container flex flex-col md:flex-row justify-between items-center">
					<div className="flex items-center gap-2">
						<ShoppingBag className="h-5 w-5 text-[#EBC48B]" />
						<span className="font-semibold">Eatzy</span>
					</div>
					<p className="text-sm text-gray-500 mt-4 md:mt-0">
						© {new Date().getFullYear()} Eatzy. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	)
}
