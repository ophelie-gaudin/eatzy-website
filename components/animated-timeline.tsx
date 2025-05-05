'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Mail, User, Calendar, Utensils, ShoppingBag } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger)
}

export function AnimatedTimeline() {
	const timelineRef = useRef<HTMLDivElement>(null)
	const timelineItemsRef = useRef<HTMLDivElement[]>([])

	const steps = [
		{
			title: 'Create an Account',
			description:
				'Sign up with just your email address - no passwords to remember!',
			icon: <User className="h-6 w-6 text-[#EBC48B]" />,
			image: '/images/eatzy-1.jpeg',
			emoji: '👤',
		},
		{
			title: 'Verify with Magic Link',
			description:
				'Enter the 6-digit code sent to your email to securely access your account.',
			icon: <Mail className="h-6 w-6 text-[#EBC48B]" />,
			image: '/images/eatzy-2.jpeg',
			emoji: '✨',
		},
		{
			title: 'Set Your Preferences',
			description:
				'Tell us how many days to plan for, your diet restrictions, and any allergies.',
			icon: <Calendar className="h-6 w-6 text-[#EBC48B]" />,
			image: '/images/eatzy-3.jpeg',
			emoji: '⚙️',
		},
		{
			title: 'Get Your Meal Plan',
			description:
				'Our AI generates a personalized meal plan based on your preferences.',
			icon: <Utensils className="h-6 w-6 text-[#EBC48B]" />,
			image: '/images/eatzy-4.jpeg',
			emoji: '🍽️',
		},
		{
			title: 'View Recipes & Shopping List',
			description:
				'Browse your meals, adjust portions, and view your complete shopping list.',
			icon: <ShoppingBag className="h-6 w-6 text-[#EBC48B]" />,
			image: '/images/eatzy-5.jpeg',
			emoji: '🛒',
		},
		{
			title: 'Shop & Cook',
			description:
				'Buy your ingredients and follow the easy step-by-step recipes to prepare delicious meals.',
			icon: <Utensils className="h-6 w-6 text-[#EBC48B]" />,
			image: '/images/eatzy-6.jpeg',
			emoji: '👨‍🍳',
		},
	]

	useEffect(() => {
		// Skip animation setup during SSR
		if (typeof window === 'undefined') return

		const timeline = timelineRef.current
		const timelineItems = timelineItemsRef.current

		if (!timeline || timelineItems.length === 0) return

		// Create the main timeline line animation that stops before the last dot
		gsap.fromTo(
			'[data-timeline-line]',
			{ height: 0 },
			{
				height: '100%',
				ease: 'none',
				scrollTrigger: {
					trigger: timeline,
					start: 'top center',
					end: 'bottom-=100 center',
					scrub: 0.5,
				},
			},
		)

		// Create floating food emojis
		const foodEmojis = [
			'🍕',
			'🍔',
			'🥗',
			'🍣',
			'🍎',
			'🥑',
			'🍇',
			'🍓',
			'🥕',
			'🍗',
		]
		const emojiContainer = document.querySelector('.emoji-container')

		if (emojiContainer) {
			// Clear any existing emojis
			emojiContainer.innerHTML = ''

			// Create 50 random emojis
			for (let i = 0; i < 50; i++) {
				const emoji = document.createElement('div')
				emoji.className = 'floating-emoji'
				emoji.textContent =
					foodEmojis[Math.floor(Math.random() * foodEmojis.length)]
				emoji.style.left = `${Math.random() * 100}%`
				emoji.style.top = `${Math.random() * 100}%`
				emoji.style.animationDelay = `${Math.random() * 5}s`
				emoji.style.animationDuration = `${8 + Math.random() * 15}s`
				emoji.style.fontSize = `${16 + Math.random() * 14}px`
				emoji.style.opacity = `${0.5 + Math.random() * 0.5}`
				emojiContainer.appendChild(emoji)
			}
		}

		// Animate each timeline item
		timelineItems.forEach((item, index) => {
			const dot = item.querySelector('.timeline-dot')
			const content = item.querySelector('.timeline-content')
			const emoji = item.querySelector('.timeline-emoji')
			const isLeft = index % 2 === 0

			// Animate the emoji
			if (emoji) {
				gsap.fromTo(
					emoji,
					{
						scale: 0,
						opacity: 0,
						rotation: -180,
					},
					{
						scale: 1,
						opacity: 1,
						rotation: 0,
						duration: 0.7,
						ease: 'elastic.out(1, 0.5)',
						scrollTrigger: {
							trigger: item,
							start: 'top 75%',
							toggleActions: 'play none none reverse',
						},
					},
				)
			}

			// Animate the dot with a bounce effect
			gsap.fromTo(
				dot,
				{
					scale: 0,
					opacity: 0,
					y: -50,
				},
				{
					scale: 1,
					opacity: 1,
					y: 0,
					duration: 0.7,
					ease: 'bounce.out',
					scrollTrigger: {
						trigger: item,
						start: 'top 70%',
						toggleActions: 'play none none reverse',
					},
				},
			)

			// Animate the content with a more playful effect
			gsap.fromTo(
				content,
				{
					x: isLeft ? -100 : 100,
					opacity: 0,
					rotation: isLeft ? -5 : 5,
				},
				{
					x: 0,
					opacity: 1,
					rotation: 0,
					duration: 0.8,
					delay: 0.3,
					ease: 'back.out(1.7)',
					scrollTrigger: {
						trigger: item,
						start: 'top 70%',
						toggleActions: 'play none none reverse',
					},
				},
			)

			// Animate the connector line between dots (except for the last item)
			if (index < steps.length - 1) {
				const connector = item.querySelector('.timeline-connector')

				gsap.fromTo(
					connector,
					{ height: 0, opacity: 0 },
					{
						height: '100%',
						opacity: 1,
						duration: 0.5,
						delay: 0.4,
						ease: 'power1.inOut',
						scrollTrigger: {
							trigger: item,
							start: 'top 60%',
							toggleActions: 'play none none reverse',
						},
					},
				)
			}

			// Add hover animations for the cards
			const card = item.querySelector('.timeline-card')
			if (card) {
				card.addEventListener('mouseenter', () => {
					gsap.to(card, {
						y: -10,
						scale: 1.03,
						// boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
						duration: 0.3,
					})
				})

				card.addEventListener('mouseleave', () => {
					gsap.to(card, {
						y: 0,
						scale: 1,
						// boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
						duration: 0.3,
					})
				})
			}
		})

		// Cleanup
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
		}
	}, [])

	return (
		<section
			id="how-to-use"
			className="py-24 bg-white overflow-hidden relative"
		>
			{/* Floating food emoji background */}
			<div className="emoji-container absolute inset-0 overflow-hidden opacity-30 pointer-events-none"></div>

			<style jsx global>{`
				.floating-emoji {
					position: absolute;
					animation: floatEmoji linear infinite;
				}
				@keyframes floatEmoji {
					0% {
						transform: translate(0, 0) rotate(0deg);
					}
					25% {
						transform: translate(10px, 10px) rotate(5deg);
					}
					50% {
						transform: translate(0, 20px) rotate(0deg);
					}
					75% {
						transform: translate(-10px, 10px) rotate(-5deg);
					}
					100% {
						transform: translate(0, 0) rotate(0deg);
					}
				}
			`}</style>

			<div className="container">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
					How to Use <span className="text-[#EBC48B]">Eatzy</span>
				</h2>
				<p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
					Preparing delicious meals has never been easier. Follow
					these simple steps to get started with Eatzy.
				</p>

				<div
					ref={timelineRef}
					className="gsap-timeline-container md:!overflow-hidden px-10"
				>
					{/* Main timeline line */}
					<div className="timeline-line" data-timeline-line></div>

					{steps.map((step, index) => (
						<div
							key={index}
							ref={(el) => {
								if (el) timelineItemsRef.current[index] = el
							}}
							className={`gsap-timeline-item p-4 ${
								index % 2 === 0 ? 'left' : 'right'
							}`}
						>
							{/* Timeline dot */}
							<div className="timeline-dot-container">
								<div className="timeline-emoji">
									{step.emoji}
								</div>
								<div className="timeline-dot">
									<span>{index + 1}</span>
								</div>

								{/* Connector to next dot (only for non-last items) */}
								{index < steps.length - 1 && (
									<div className="timeline-connector"></div>
								)}
							</div>

							{/* Content */}
							<div className="timeline-content lg:!h-[540px]">
								<div className="timeline-card  flex flex-col md:flex-row gap-6 lg:gap-10">
									<div className="timeline-image">
										<Image
											src={step.image}
											width={600}
											height={400}
											alt={step.title}
											className="object-cover w-full h-auto !rounded-lg"
										/>
										<div className="timeline-image-overlay">
											<span className="text-4xl">
												{step.emoji}
											</span>
										</div>
									</div>
									<div className="timeline-text flex flex-col justify-center">
										<div className="timeline-header">
											<div className="timeline-icon">
												{step.icon}
											</div>
											<h3 className="timeline-title">
												{step.title}
											</h3>
										</div>
										<p className="timeline-description">
											{step.description}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
