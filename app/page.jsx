import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const participationOptions = [
	{
		name: 'Companies',
		description:
			"If you are a company that uses AI in your software engineering process, please come participate in our research. Participation will grant you exclusive access to our findings. See how your company stacks up against the competition. Are you leveraging AI to its fullest potential? And if not, what are other companies doing that can improve your engineer's workflow?",
		link: '/companies',
	},
	{
		name: 'Individuals',
		description:
			'If you are an individual software engineer who uses AI in your software engineering process, we would love to hear from you. Your feedback will help us understand how AI is being used in the industry and how it can be improved.',
		link: '/individuals',
	},
];

export default function Home() {
	return (
		<div className="relative isolate px-6 pt-14 lg:px-8">
			<div
				aria-hidden="true"
				className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
			>
				<div
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
					className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-600 to-purple-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				/>
			</div>
			<main className="mx-auto max-w-7xl gap-16 py-10 flex flex-col items-center justify-between">
				<h1 className="font-semibold text-4xl md:text-7xl text-balance text-center">
					Artificial Intelligence in Software Engineering Survey
				</h1>
				<h2 className="text-xl font-medium max-w-2xl text-balance text-center">
					Researching how software engineers are using AI, LLMs, and other
					various predictive tools to increase their productivity
				</h2>
				{/* <p></p> */}

				<section>
					<h3 className="text-center font-medium text-3xl mb-12">Interested in Participating?</h3>
					<div className="grid md:grid-cols-3 gap-4">
						{participationOptions.map(option => (
							<Card key={option.name}>
								<CardHeader>
									<CardTitle>{option.name}</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription>{option.description}</CardDescription>
								</CardContent>
								<CardFooter>
									<Button>Go</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</section>
			</main>
			<div
				aria-hidden="true"
				className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl "
			>
				<div
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
					className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-emerald-600 to-sky-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
				/>
			</div>
		</div>
	);
}
