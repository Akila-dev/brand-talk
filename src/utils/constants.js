import {
	p11,
	p12,
	p13,
	p21,
	p22,
	p23,
	p24,
	p31,
	p41,
	p51,
	videoThumbnail1,
} from "../assets/portfolio";
import {
	logo1,
	logo2,
	logo3,
	logo4,
	logo5,
	logo6,
	logo7,
	logo8,
	logo9,
	logo10,
	logo11,
	logo12,
} from "../assets/logos";

export const LOGOS = [
	logo1,
	logo2,
	logo3,
	logo4,
	logo5,
	logo6,
	logo7,
	logo8,
	logo9,
	logo10,
	logo11,
	logo12,
];

export const NAVIGATION = [
	{
		name: "Who we are",
		url: "about",
	},
	{
		name: "Services",
		url: "services",
	},
	{
		name: "Clients",
		url: "clients",
	},
	{
		name: "Our Works",
		url: "portfolio",
	},
	{
		name: "Partners",
		url: "partners",
	},
	{
		name: "Work with us",
		url: "contact",
	},
];

export const PORTFOLIO = [
	{
		company: "BANK OF MONTREAL",
		content:
			"BMO participated at Colission, the fastest growing Tech conference in North America with 30,000+ attendees, with an exclusive Women in Tech Lounge During the three day event, BMO’s objective were:",
		list: [
			"Empower women, tech, communities and companies around the world",
			"Recruitment & Hiring",
			"Showcase BMO Innovation",
			"Support BMO Women in Technology",
		],
		postContent:
			"Brandtalk Media custom designed two innovative 32” x 32” & 65” x 36” ft spaces with interactive activations including a one of a kind hologram experience. We developed ongoing in-booth stage programming, including panel discussions, fireside chats, keynotes and interactive activities. The event hosted two of the largest activations at the event. BMO ranked top 10% of companies favourited on the Colission app.",
		subheading: "",
		results: [],
		images: [p51],
		videos: [],
	},
	{
		company: "SAINT LUCIA TOURISM AUTHORITY",
		content:
			"Brandtalk collaborated with the government of Saint Lucia to execute a compelling social media campaign aimed at boosting tourism and raising awareness of the island in key markets including Canada, USA, and the UK. Leveraging the new tagline #LetHerInspire, we developed a 360 approach, unveiling a collection of 10 niche themed videos, over 200 captivating images, with a sweepstakes to win a 7-night stay in Saint Lucia. The strategic plan included influencer partnerships, and targeted paid advertising. This comprehensive campaign not only garnered significant attention but also earned Saint Lucia their first industry digital award—an achievement reflecting the campaign'simpactful success.",
		subheading: "RESULTS",
		results: [
			{
				title: "Award",
				value:
					"Caribbean Tourism Organization (CTO) Best Social Media Marketing Campaign",
			},
			{
				title: "Impressions",
				value: "11M",
			},
			{
				title: "Sweepstakes entries",
				value: "20k",
			},
			{
				title: "Social Media growth",
				value: " 33%+ Facebook + 21%+ Instagram",
			},
		],
		images: [p11, p12],
		videos: [{ video: p13, type: "video/mp4", thumbnail: videoThumbnail1 }],
	},
	{
		company: "THE WINDSOR ARMS HOTEL",
		content:
			"Covid-19 affected every global sector, with the hotel industry among the hardest hit. The Windsor Arms Hotel tasked Brandtalk Media to create a campaign to drive sales to the hotel which was in a government-mandated hotel quarantine. With the challenge of the hotel closing all shared spaces including their only restaurant known famously in Toronto for Afternoon Tea, Brandtalk launched a tea campaign called “Mother‘s Day Tea-To-Go” encouraging guests to order and pick up a new pre-packaged selection of tea, scones and sandwiches. Additional pre-packaged full lunch meals from the restaurant were donated to shelters and hospital front-line workers. The campaign was promoted heavily on social media with a dedicated press release and media pitching resulting in coverage on Canada’s top broadcast channels and newspapers.",
		subheading: "",
		results: [
			{
				title: "$60,000+",
				value: "in “Mother‘s Day Tea To Go” packages",
			},
		],
		images: [p31],
		videos: [],
	},

	{
		company: "STONEFIELD VILLA RESORT",
		content:
			"Stonefield Villa Resort repositioned its product offering to target health and wellness travellers following major renovations including a new fitness centre with indoor and outdoor Yoga studio. Looking to drive awareness and bookings, Stonefield partnered with Brandtalk Media to craft a targeted social media campaign. We curated a series of images and short videos highlighting the resort’s rejuvenating facilities and experiences. By strategically leveraging the new content across social platforms and collaborating with wellness influencers, the campaign solidifying Stonefield Villa Resort’s position as a premier Caribbean destination for health-conscious travellers.",
		subheading: "RESULTS",
		results: [
			{
				title: "Social Media Growth",
				value: "60k+",
			},
			{
				title: "Impressions",
				value: "1M+",
			},
		],
		images: [p21, p22, p23, p24],
		videos: [],
	},
	{
		company: "TORONTO CARIBBEAN CARNIVAL",
		content:
			"The Festival Management Committee (FMC), the producers of the Toronto Caribbean Carnival is the largest cultural festival in North America. The committee was looking for a fresh take on targeting millennials to drive sales across markets, create brand awareness and attract new visitors to the City of Toronto. We executed a 360-degree Advertising Digital Campaign targeting Canada and the United States. Over the course of three months, the Toronto CAribbean Carnival Instagram increased by 7,000 followers. Thefeed was transformed with curated content through social media influencers and celebrity collaborations including the Real House Wives of Atlanta.",
		subheading: "RESULTS",
		results: [
			{
				title: "Major Events",
				value: "8+",
			},
			{
				title: "Attendees",
				value: "1M+",
			},
			{
				title: "Impressions",
				value: "250M+",
			},
		],
		images: [p41],
		videos: [],
	},
];

export const SERVICES = [
	{
		title: "SOCIAL MEDIA",
		list: [
			"Social media strategy",
			"Social media consultancy",
			"Account setup and optimization",
			"Calendar management",
			"Performance tracking and monitoring",
			"Community management",
			"Campaign management",
			"• Analytics and performance tracking",
		],
		speed: 0.5,
	},
	{
		title: "PUBLIC RELATIONS",
		list: [
			"Public relations strategy",
			"Media outreach",
			"Press releases",
			"Crisis and reputation management",
			"Event planning and execution",
			"Brand launches",
			"Media events and press trips",
		],
		speed: 0.5,
	},
	{
		title: "MARKETING",
		list: [
			"Marketing campaign planning and execution",
			"Develop innovative exhibition spaces",
			" Brand development and positioning",
			"Marketing strategy development",
			"Market research, identification and segmentation",
			"Email marketing",
			"Strategic partnerships",
		],
		speed: 0.5,
	},
	{
		title: "influencer marketing",
		list: [
			"Influencer Management",
			"Brand ambassador programs",
			"Influencer research and outreach",
			"Influencer brand trips",
		],
		speed: 0.5,
	},
	{
		title: "CONTENT CREATION",
		list: [
			"Content strategy & visual creation",
			" Storyboard planning & execution",
			"Videography and photography",
			"Event graphics",
			"Photo shoot planning and execution",
		],
		speed: 0.5,
	},
	{
		title: "DIGITAL ADVERTISING",
		list: [
			"Social media ads",
			"Google ads set up and optimization",
			"Keyword research and analysis",
			"Pay-per-click (PPC) advertising campaigns",
			"Copywriting and creative development",
			"Performance analysis and conversation tracking",
			"Monitoring and optimization",
		],
		speed: 0.5,
	},
];
