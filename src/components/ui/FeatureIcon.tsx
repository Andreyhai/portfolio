"use client";

import { motion } from "framer-motion";

interface FeatureIconProps {
	type: "focus" | "speed" | "communication";
	isHovered: boolean;
}

export default function FeatureIcon({ type, isHovered }: FeatureIconProps) {

	const centerOrigin = {
		transformOrigin: "24px 24px",
		transformBox: "fill-box",
	};

	const iconConfig = {
		focus: {
			// Прицел/мишень с неоновым свечением
			content: (
				<g>
					{/* Внешнее кольцо мишени */}
					<motion.circle
						cx="24"
						cy="24"
						r="18"
						fill="none"
						stroke="url(#gradient-focus)"
						strokeWidth="1.5"
						strokeOpacity="0.4"
						animate={{
							strokeOpacity: isHovered ? [0.4, 0.8, 0.4] : 0.4,
							scale: isHovered ? [1, 1.1, 1] : 1,
						}}
						transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
					/>

					{/* Среднее кольцо */}
					<motion.circle
						cx="24"
						cy="24"
						r="12"
						fill="none"
						stroke="url(#gradient-focus)"
						strokeWidth="2"
						strokeOpacity="0.6"
						animate={{
							strokeOpacity: isHovered ? [0.6, 1, 0.6] : 0.6,
							strokeWidth: isHovered ? [2, 2.5, 2] : 2,
						}}
						transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
					/>

					{/* Внутреннее кольцо */}
					<motion.circle
						cx="24"
						cy="24"
						r="6"
						fill="url(#gradient-focus)"
						fillOpacity="0.3"
						stroke="url(#gradient-focus)"
						strokeWidth="2"
						animate={{
							fillOpacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
							scale: isHovered ? [1, 1.2, 1] : 1,
						}}
						transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
					/>

					{/* Центральная точка */}
					<motion.circle
						cx="24"
						cy="24"
						r="2"
						fill="url(#gradient-focus)"
						animate={{
							scale: isHovered ? [1, 1.5, 1] : 1,
						}}
						transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
					/>

					{/* Перекрестие */}
					<motion.g>
						<motion.line
							x1="24"
							y1="6"
							x2="24"
							y2="18"
							stroke="url(#gradient-focus)"
							strokeWidth="2"
							strokeLinecap="round"
							animate={{
								strokeOpacity: isHovered ? [0.8, 1, 0.8] : 0.8,
								y1: isHovered ? [6, 4, 6] : 6,
							}}
							transition={{ duration: 1.2, repeat: isHovered ? Infinity : 0 }}
						/>
						<motion.line
							x1="24"
							y1="30"
							x2="24"
							y2="42"
							stroke="url(#gradient-focus)"
							strokeWidth="2"
							strokeLinecap="round"
							animate={{
								strokeOpacity: isHovered ? [0.8, 1, 0.8] : 0.8,
								y2: isHovered ? [42, 44, 42] : 42,
							}}
							transition={{ duration: 1.2, repeat: isHovered ? Infinity : 0 }}
						/>
						<motion.line
							x1="6"
							y1="24"
							x2="18"
							y2="24"
							stroke="url(#gradient-focus)"
							strokeWidth="2"
							strokeLinecap="round"
							animate={{
								strokeOpacity: isHovered ? [0.8, 1, 0.8] : 0.8,
								x1: isHovered ? [6, 4, 6] : 6,
							}}
							transition={{ duration: 1.2, repeat: isHovered ? Infinity : 0 }}
						/>
						<motion.line
							x1="30"
							y1="24"
							x2="42"
							y2="24"
							stroke="url(#gradient-focus)"
							strokeWidth="2"
							strokeLinecap="round"
							animate={{
								strokeOpacity: isHovered ? [0.8, 1, 0.8] : 0.8,
								x2: isHovered ? [42, 44, 42] : 42,
							}}
							transition={{ duration: 1.2, repeat: isHovered ? Infinity : 0 }}
						/>
					</motion.g>

					{/* Неоновое свечение */}
					{isHovered && (
						<motion.circle
							cx="24"
							cy="24"
							r="20"
							fill="none"
							stroke="url(#gradient-focus)"
							strokeWidth="1"
							strokeOpacity="0.3"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{
								scale: [0.8, 1.3, 0.8],
								opacity: [0, 0.3, 0],
							}}
							transition={{ duration: 2, repeat: Infinity }}
						/>
					)}
				</g>
			),
			gradient: "from-cyan-400 via-blue-500 to-purple-500",
		},
		speed: {
			// Молния/спидометр с неоновым эффектом
			content: (
				<g>
					{/* Спидометр - дуга */}
					<motion.path
						d="M 12 24 A 12 12 0 0 1 36 24"
						fill="none"
						stroke="url(#gradient-speed)"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeOpacity="0.6"
						animate={{
							strokeOpacity: isHovered ? [0.6, 1, 0.6] : 0.6,
							strokeWidth: isHovered ? [2.5, 3, 2.5] : 2.5,
						}}
						transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
					/>

					{/* Стрелка спидометра */}
					<motion.g style={{
						transformOrigin: "24px 24px",
						transformBox: "fill-box",
					}}>
						<motion.line
							x1="24"
							y1="24"
							x2="24"
							y2="14"
							stroke="url(#gradient-speed)"
							strokeWidth="2.5"
							strokeLinecap="round"
							animate={{
								rotate: isHovered ? [0, 60, 0] : 0,
								strokeOpacity: isHovered ? [0.8, 1, 0.8] : 0.8,
							}}
							transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
						/>
						{/* Наконечник стрелки */}
						<motion.path
							d="M24 14L22 16L26 16Z"
							fill="url(#gradient-speed)"
							animate={{
								rotate: isHovered ? [0, 60, 0] : 0,
							}}
							transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
							style={{
								transformOrigin: "24px 15px",
								transformBox: "fill-box",
							}}
						/>
					</motion.g>

					{/* Молния - главный элемент */}
					<motion.g>
						<motion.path
							d="M20 18L24 22L22 22L26 30L22 26L24 26L20 18Z"
							fill="url(#gradient-speed)"
							fillOpacity="0.9"
							stroke="url(#gradient-speed)"
							strokeWidth="1"
							animate={{
								scale: isHovered ? [1, 1.15, 1] : 1,
								fillOpacity: isHovered ? [0.9, 1, 0.9] : 0.9,
							}}
							transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
						/>
						{/* Внутренний блик молнии */}
						<motion.path
							d="M21 19L23 21L22 21L24 27L22 24L23 24L21 19Z"
							fill="white"
							fillOpacity="0.4"
							animate={{
								opacity: isHovered ? [0.4, 0.7, 0.4] : 0.4,
							}}
						/>
					</motion.g>

					{/* Вспышки вокруг молнии */}
					{isHovered && (
						<motion.g>
							{[...Array(4)].map((_, i) => (
								<motion.path
									key={i}
									d={`M${20 + i * 2} ${18 + i * 2}L${22 + i * 2} ${20 + i * 2}L${21 + i * 2} ${20 + i * 2}L${23 + i * 2} ${22 + i * 2}Z`}
									fill="url(#gradient-speed)"
									fillOpacity="0.3"
									initial={{ opacity: 0, scale: 0 }}
									animate={{
										opacity: [0, 0.5, 0],
										scale: [0, 1.5, 0],
										x: [0, (i - 1.5) * 3, 0],
										y: [0, (i - 1.5) * 3, 0],
									}}
									transition={{
										duration: 1,
										repeat: Infinity,
										delay: i * 0.2,
									}}
								/>
							))}
						</motion.g>
					)}

					{/* Центральная точка */}
					<motion.circle
						cx="24"
						cy="24"
						r="2"
						fill="url(#gradient-speed)"
						animate={{
							scale: isHovered ? [1, 1.3, 1] : 1,
						}}
						transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
					/>
				</g>
			),
			gradient: "from-yellow-400 via-orange-500 to-red-500",
		},
		communication: {
			// Сеть/связь с неоновыми узлами
			content: (
				<g>
					{/* Центральный узел */}
					<motion.circle
						cx="24"
						cy="24"
						r="4"
						fill="url(#gradient-communication)"
						stroke="url(#gradient-communication)"
						strokeWidth="1.5"
						animate={{
							scale: isHovered ? [1, 1.2, 1] : 1,
							fillOpacity: isHovered ? [0.8, 1, 0.8] : 0.8,
						}}
						transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
					/>

					{/* Внешние узлы */}
					{[
						{ cx: 12, cy: 12 },
						{ cx: 36, cy: 12 },
						{ cx: 12, cy: 36 },
						{ cx: 36, cy: 36 },
					].map((node, i) => (
						<motion.g key={i}>
							{/* Линии связи */}
							<motion.line
								x1="24"
								y1="24"
								x2={node.cx}
								y2={node.cy}
								stroke="url(#gradient-communication)"
								strokeWidth="1.5"
								strokeOpacity="0.4"
								strokeLinecap="round"
								animate={{
									strokeOpacity: isHovered ? [0.4, 0.8, 0.4] : 0.4,
									strokeWidth: isHovered ? [1.5, 2, 1.5] : 1.5,
								}}
								transition={{
									duration: 1.5,
									repeat: isHovered ? Infinity : 0,
									delay: i * 0.2,
								}}
							/>

							{/* Узел */}
							<motion.circle
								cx={node.cx}
								cy={node.cy}
								r="3"
								fill="url(#gradient-communication)"
								stroke="url(#gradient-communication)"
								strokeWidth="1.5"
								animate={{
									scale: isHovered ? [1, 1.3, 1] : 1,
									fillOpacity: isHovered ? [0.6, 1, 0.6] : 0.6,
								}}
								transition={{
									duration: 1,
									repeat: isHovered ? Infinity : 0,
									delay: i * 0.15,
								}}
							/>

							{/* Импульсы по линиям */}
							{isHovered && (
								<motion.circle
									cx={24}
									cy={24}
									r="2"
									fill="url(#gradient-communication)"
									initial={{ opacity: 0 }}
									animate={{
										opacity: [0, 1, 0],
										cx: [24, node.cx],
										cy: [24, node.cy],
									}}
									transition={{
										duration: 1.5,
										repeat: Infinity,
										delay: i * 0.3,
									}}
								/>
							)}
						</motion.g>
					))}

					{/* Дополнительные связи между узлами */}
					<motion.g opacity="0.3">
						<motion.line
							x1="12"
							y1="12"
							x2="36"
							y2="12"
							stroke="url(#gradient-communication)"
							strokeWidth="1"
							strokeDasharray="2 2"
							animate={{
								strokeDashoffset: isHovered ? [0, -4, 0] : 0,
								opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
							}}
							transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
						/>
						<motion.line
							x1="12"
							y1="36"
							x2="36"
							y2="36"
							stroke="url(#gradient-communication)"
							strokeWidth="1"
							strokeDasharray="2 2"
							animate={{
								strokeDashoffset: isHovered ? [0, -4, 0] : 0,
								opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
							}}
							transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, delay: 0.5 }}
						/>
						<motion.line
							x1="12"
							y1="12"
							x2="12"
							y2="36"
							stroke="url(#gradient-communication)"
							strokeWidth="1"
							strokeDasharray="2 2"
							animate={{
								strokeDashoffset: isHovered ? [0, -4, 0] : 0,
								opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
							}}
							transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, delay: 0.25 }}
						/>
						<motion.line
							x1="36"
							y1="12"
							x2="36"
							y2="36"
							stroke="url(#gradient-communication)"
							strokeWidth="1"
							strokeDasharray="2 2"
							animate={{
								strokeDashoffset: isHovered ? [0, -4, 0] : 0,
								opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
							}}
							transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, delay: 0.75 }}
						/>
					</motion.g>

					{/* Неоновое свечение вокруг центра */}
					{isHovered && (
						<motion.circle
							cx="24"
							cy="24"
							r="18"
							fill="none"
							stroke="url(#gradient-communication)"
							strokeWidth="1"
							strokeOpacity="0.2"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{
								scale: [0.8, 1.2, 0.8],
								opacity: [0, 0.2, 0],
							}}
							transition={{ duration: 2, repeat: Infinity }}
						/>
					)}
				</g>
			),
			gradient: "from-green-400 via-emerald-500 to-cyan-500",
		},
	};

	const config = iconConfig[type];

	return (
		<motion.div
			className="relative w-16 h-16"
			animate={{
				scale: isHovered ? 1.15 : 1,
				rotateY: isHovered ? [0, 8, -8, 0] : 0,
				rotateX: isHovered ? [0, 3, -3, 0] : 0,
			}}
			transition={{
				scale: { duration: 0.3 },
				rotateY: { duration: 3, repeat: isHovered ? Infinity : 0, ease: "easeInOut" },
				rotateX: { duration: 2.5, repeat: isHovered ? Infinity : 0, ease: "easeInOut" },
			}}
			style={{
				transformStyle: "preserve-3d",
				perspective: "1000px",
			}}
		>
			<motion.svg
				width="48"
				height="48"
				viewBox="0 0 48 48"
				className="w-full h-full"
				style={{
					filter: isHovered
						? "drop-shadow(0 0 20px currentColor) drop-shadow(0 0 10px currentColor) drop-shadow(0 4px 6px rgba(0,0,0,0.2))"
						: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
				}}
			>
				<defs>
					{/* Неоновые градиенты */}
					<linearGradient id={`gradient-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="var(--primary)" />
						<stop offset="50%" stopColor="var(--secondary)" />
						<stop offset="100%" stopColor="var(--accent)" />
					</linearGradient>

					{/* Эффект неонового свечения */}
					<filter id={`neon-${type}`}>
						<feGaussianBlur stdDeviation="2" result="coloredBlur" />
						<feMerge>
							<feMergeNode in="coloredBlur" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				</defs>

				<motion.g
					fill={`url(#gradient-${type})`}
					stroke={`url(#gradient-${type})`}
					filter={`url(#neon-${type})`}
					style={{
						transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
					}}
				>
					{config.content}
				</motion.g>
			</motion.svg>

			{/* Неоновое свечение вокруг иконки */}
			{isHovered && (
				<motion.div
					className="absolute inset-0 rounded-full blur-2xl opacity-40"
					style={{
						background: `linear-gradient(135deg, var(--primary), var(--secondary), var(--accent))`,
						boxShadow: `0 0 30px var(--primary), 0 0 60px var(--secondary)`,
					}}
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{
						scale: [0.8, 1.3, 0.8],
						opacity: [0, 0.4, 0],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			)}
		</motion.div>
	);
}
