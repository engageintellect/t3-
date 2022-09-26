import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { trpc } from '../utils/trpc';
import Navbar from './components/Navbar';

const Home: NextPage = () => {
	const etMsg = trpc.useQuery(['trpcRoute.etAPI']);

	return (
		<section>
			<Head>
				<title>ET T3+</title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<main className="h-screen bg-black text-white">
				<div className="flex place-content-center h-screen">
					<div className="flex place-content-center items-center">
						<div className="flex flex-col">
							<div className="text-6xl text-center my-2">Hello, T3+.</div>
							<div className=" text-lg">
								{etMsg.data ? (
									<span className="mx-10">
										<a href="https://et-dev.firstam.com">{etMsg.data.greeting}</a>
									</span>
								) : (
									<span>Loading..</span>
								)}
							</div>

							<a href="#API">
								<div className="flex btn rounded-lg w-fit mx-auto mt-2 bg-black border-gray-500 hover:bg-gray-800 hover:border-gray-800">
									API
								</div>
							</a>
						</div>
					</div>
					<div className="flex place-items-center mx-5">
						<ul>
							<li>
								<a href="https://nextjs.org" target={`_blank`}>
									Next.js
								</a>
							</li>
							<li>
								<a href="https://typescriptlang.org" target={`_blank`}>
									TypeScript
								</a>
							</li>
							<li>
								<a href="https://tailwindcss.com" target={`_blank`}>
									Tailwind
								</a>
							</li>
							<li>
								<a href="https://trpc.io" target={`_blank`}>
									tRPC
								</a>
							</li>
							<li>
								<a href="https://daisyui.com" target={`_blank`}>
									Daisy UI
								</a>
							</li>
							<li>
								<a href="https://prisma.io" target={`_blank`}>
									Prisma
								</a>
							</li>
							<li>
								<a href="https://mysql.com" target={`_blank`}>
									MySQL
								</a>
							</li>
							<li>
								<a href="https://app.planetscale.com" target={`_blank`}>
									PlanetScale
								</a>
							</li>
							<li>
								<a href="https://vercel.com" target={`_blank`}>
									Vercel
								</a>
							</li>
						</ul>
					</div>
				</div>
			</main>

			<main className="flex place-content-center h-screen">
				<div className="flex place-content-center items-center">
					<div id="API" className="text-6xl mx-5">
						API
					</div>
					<ul>
						<li>
							<a href={'/api/helloworld'}>/helloworld</a>
						</li>
						<li>
							<a href={'/api/getUsers'}>/getUsers</a>
						</li>
						<li>
							<a href={'/api/createUser'}>/createUser</a>
						</li>
						<li>
							<a href={'/api/deleteUser'}>/deleteUser</a>
						</li>
						<li>
							<a href={'http://localhost:5555'}>/PrismaStudio</a>
						</li>
					</ul>
				</div>
			</main>

			<div className="bg-black text-white text-center">
				{etMsg.data ? <p>{etMsg.data.greeting}</p> : <p>Loading..</p>}
			</div>
		</section>
	);
};

export default Home;
