'use client'

import { useRef } from 'react'
import Image from 'next/image'
import {
	Mail,
	User,
	Calendar,
	Utensils,
	ShoppingBag,
	ChevronDown,
} from 'lucide-react'
import { ScrollAnimation } from './scroll-animation'

export function HowToUse() {
	const sectionRef = useRef<HTMLElement>(null)

	const steps = [
		{
			title: 'Create an Account',
			description:
				'Sign up with just your email address - no passwords to remember!',
			icon: <User className="h-6 w-6 text-[#EBC48B]" />,
			image: '/images/eatzy-1.jpeg',
		},
		{
			title: 'Verify with Magic Link',
			description:
				'Enter the 6-digit code sent to your email to securely access your account.',
			icon: <Mail className="h-6 w-6 text-[#EBC48B]" />,
			image: '/images/eatzy-2.jpeg',
		},
		{
			title: 'Set Your Preferences',
			description:
				'Tell us how many days to plan for, your diet restrictions, and any allergies.',
			icon: <Calendar className="h-6 w-6 text-[#EBC48B]" />,
			image: '/images/eatzy-3.jpeg',
		},
		{
			title: 'Get Your Meal Plan',
			description:
				'Our AI generates a personalized meal plan based on your preferences.',
			icon: <Utensils className="h-6 w-6 text-[#EBC48B]" />,
			image: '/images/eatzy-4.jpeg',
		},
		{
			title: 'View Recipes & Shopping List',
			description:
				'Browse your meals, adjust portions, and view your complete shopping list.',
			icon: <ShoppingBag className="h-6 w-6 text-[#EBC48B]" />,
			image: '/images/eatzy-5.jpeg',
		},
		{
			title: 'Shop & Cook',
			description:
				'Buy your ingredients and follow the easy step-by-step recipes to prepare delicious meals.',
			icon: <Utensils className="h-6 w-6 text-[#EBC48B]" />,
			image: '/images/eatzy-6.jpeg',
		},
	]

	return (
		<section
			id="how-to-use"
			ref={sectionRef}
			className="py-24 bg-white overflow-hidden"
		>
			<div className="container">
				<ScrollAnimation animation="fade-up">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
						How to Use <span className="text-[#EBC48B]">Eatzy</span>
					</h2>
				</ScrollAnimation>

				<ScrollAnimation animation="fade-up" delay={200}>
					<p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
						Preparing delicious meals has never been easier. Follow
						these simple steps to get started with Eatzy.
					</p>
				</ScrollAnimation>

				<div className="timeline-container">
					{steps.map((step, index) => (
						<div
							key={index}
							className={`timeline-item ${
								index % 2 === 0 ? 'left' : 'right'
							}`}
						>
							{/* Timeline connector */}
							<div className="timeline-connector">
								<div className="timeline-dot">
									<span>{index + 1}</span>
								</div>
								{index < steps.length - 1 && (
									<div className="timeline-arrow">
										<ChevronDown className="h-5 w-5 text-[#EBC48B]" />
									</div>
								)}
							</div>

							{/* Content */}
							<div
								className={`timeline-content ${
									index % 2 === 0 ? '' : ''
								}`}
							>
								<div
									className={`timeline-card ${
										index % 2 === 0
											? 'animate-from-left'
											: 'animate-from-right'
									}`}
								>
									<div className="timeline-image">
										<Image
											src={
												step.image || '/placeholder.svg'
											}
											width={600}
											height={400}
											alt={step.title}
											className="rounded-t-lg object-cover w-full h-auto"
										/>
									</div>
									<div className="timeline-text">
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
