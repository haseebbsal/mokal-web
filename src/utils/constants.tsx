import TabNoSlider from "@/components/common/tabs/tab-no-slider"
import { NavbarMenuSetting, TabItemProp } from "./types"
import LinearGradientText from "@/components/common/linear-gradient-text"
import TabWithSlider from "@/components/common/tabs/tab-with-slider"
import Image from "next/image"

export const countries = [
    'Canada',
    'USA',
    'Mexico'
]


export const phoneNumber = "+1 (289) 295-1640"



export const navbarMenuSettings: NavbarMenuSetting[] = [
    {
        name: "Home",
        link: '/'
    },
    {
        name: "Services",
        link: '/',
        isDropDown: true,
        index: 0
    },
    {
        name: "About Us",
        link: '/',
        isDropDown: true,
        index: 1
    },
    {
        name: "Partnerships",
        link: '/',
        isDropDown: true,
        index: 2
    },
    {
        name: "Resources",
        link: '/',
        isDropDown: true,
        index: 3
    },
    {
        name: "Get Started",
        link: '/',
        isButton: true,
        extraClass: ""
    },
    {
        name: "Book a Demo",
        link: '/',
        isButton: true,
        extraClass: "!bg-transparent text-base-purple border-2 border-base-purple"
    },
    {
        name: "Login",
        link: '/',
        isButton: true,
        extraClass: "!bg-transparent text-gray-600 !p-0 ",
        style: { padding: 0, color: 'grey' }
    },
    {
        name: "Francais",
        link: '/',
        isButton: true,
        extraClass: "!bg-transparent text-gray-600 !p-0 ",
        style: { padding: 0, color: 'grey' }
    }
]


export const megaMenuServices = [
    {
        icon: '/icons/loading.svg',
        title: "Less Than Truckload (LTL)",
        description: "Cost-effective shipping for smaller freight."
    },
    {
        icon: '/icons/food-delivery.svg',
        title: "Courier Services",
        description: "Fast and reliable package delivery."
    },
    {
        icon: '/icons/premium-quality.svg',
        title: "Specialized Freight",
        description: "Expert handling for unique shipments."
    },
    {
        icon: '/icons/international.svg',
        title: "International Shipping",
        description: "Hassle-free international shipping."
    },
    {
        icon: '/icons/world-humanitarian-day.svg',
        title: "White Glove Services",
        description: "Premium care for delicate and high-value items."
    },
    {
        icon: '/icons/pricing.svg',
        title: "Spot Quote",
        description: "Instant pricing for urgent shipments."
    },
    {
        icon: '/icons/fulfillment.svg',
        title: "Fulfillment Services",
        description: "Streamlined inventory and order management."
    },
    {
        icon: '/icons/delivery (1) (1).svg',
        title: "Freight Forwarding",
        description: "Global logistics for seamless freight movement."
    },
    {
        icon: '/icons/delivery (1).svg',
        title: "Truckload",
        description: "Full-capacity shipping for large freight."
    }
]

export const megaMenuAbout = [
    {
        icon: '/icons/about.svg',
        title: "Who We Are",
        description: "Your trusted partner in logistics."
    },
    {
        icon: '/icons/chat.svg',
        title: "Contact Us",
        description: "Reach out for personalized support."
    },
    {
        icon: '/icons/career.svg',
        title: "Careers",
        description: "Join our team and grow with us."
    },
    {
        icon: '/icons/satisfaction.svg',
        title: "Customer Spotlight",
        description: "Showcasing success stories and partnerships."
    },
]


export const megaMenuPartnerships = [
    {
        icon: '/icons/broker.svg',
        title: "Broker Partners",
        description: "Collaborate with us for mutual growth."
    },
    {
        icon: '/icons/corporation.svg',
        title: "Corporate Partners",
        description: "Customized solutions for enterprise needs."
    },
    {
        icon: '/icons/delivery-truck (1).svg',
        title: "Carrier Partners",
        description: "Fastest and Most Reliable Carrier Partners"
    },
]


export const megaMenuResources = [
    {
        icon: '/icons/info (1).svg',
        title: "Shipping Guides",
        description: "Step-by-step resources for seamless shipping."
    },
    {
        icon: '/icons/video.svg',
        title: "Video Library",
        description: "Learn with engaging and informative videos."
    },
    {
        icon: '/icons/blogging 1.svg',
        title: "Blog",
        description: "Expert advice to streamline shipping."
    },
]


export const HomePageTabs = [
    {
        title: 'Fulfillment',
        component: <TabNoSlider title={<h1 className="sm:!text-3xl text-lg font-bold" >Comprehensive <LinearGradientText text="Fulfillment Services" /> for Your Business</h1>} description={['Simplify your logistics with MGC Freight! We offer end-to-end fulfillment solutions, including efficient order processing, secure warehousing, and hassle-free shipping, ensuring a smooth experience for you and your customers.']} />
    },
    {
        title: "Courier",
        component: <TabWithSlider title={<h1 className="sm:!text-3xl text-lg font-bold" >Trusted Courier Partner Solutions for <LinearGradientText text="Seamless Deliveries" /></h1>} description={['Enhance your shipping capabilities with MGC Freight’s reliable courier partnerships. We ensure timely deliveries, secure handling, and exceptional service, providing your business with the flexibility and efficiency needed to satisfy your customers every step of the way.']} carousel={[{ imageSrc: "/couriers/Artboard.svg", description: "Shipping, courier, and expedited transport services within the US, Canada." }, { imageSrc: "/couriers/gardewine.svg", description: "Leading trucking company providing logistics services across Canada for 70+ years." }, { imageSrc: "/couriers/DayandRoss.svg", description: "Logistics company that operates in various sectors, including logistics solutions" }, { description: "Canada’s most trusted transport carrier for over 60 years.", imageSrc: "/couriers/M-O-2.svg" }, { imageSrc: "/couriers/kindersley.svg", description: "Providing truckload and LTL service throughout North America" }, { imageSrc: "/couriers/DHL.svg", description: "American-founded German logistics company delivering over 1.8 billion parcels per year." }, { imageSrc: "/couriers/Canpar.svg", description: "Helping small parcel delivery companies’ shipping processes on a day-to-day basis." }]} />
    },
    {
        title: "LTL",
        component: <TabWithSlider title={<h1 className="sm:!text-3xl text-lg font-bold" >Reliable <LinearGradientText text="LTL (Less Than Truckload)" /> Partner Solutions</h1>} description={['Optimize your freight shipping with MGC Freight’s LTL services. We provide cost-effective and flexible solutions, ensuring your smaller shipments are delivered safely and on time, no matter the destination.']} carousel={[{ imageSrc: "/couriers/Artboard.svg", description: "Shipping, courier, and expedited transport services within the US, Canada." }, { imageSrc: "/couriers/gardewine.svg", description: "Leading trucking company providing logistics services across Canada for 70+ years." }, { imageSrc: "/couriers/DayandRoss.svg", description: "Logistics company that operates in various sectors, including logistics solutions" }, { description: "Canada’s most trusted transport carrier for over 60 years.", imageSrc: "/couriers/M-O-2.svg" }, { imageSrc: "/couriers/kindersley.svg", description: "Providing truckload and LTL service throughout North America" }, { imageSrc: "/couriers/DHL.svg", description: "American-founded German logistics company delivering over 1.8 billion parcels per year." }, { imageSrc: "/couriers/Canpar.svg", description: "Helping small parcel delivery companies’ shipping processes on a day-to-day basis." }]} />
    },
    {
        title: "Brokers",
        component: <TabNoSlider title={<h1 className="sm:!text-3xl text-lg font-bold" >The <LinearGradientText text="Ultimate Platform" /> for Freight Brokers</h1>} description={['Streamline your operations with MGC Freight’s broker-friendly solutions. We offer efficient tools and reliable support to help you manage shipments, connect with carriers, and ensure seamless deliveries for your clients.']} />
    },
    {
        title: "Spot Quote",
        component: <TabNoSlider title={<h1 className="sm:!text-3xl text-lg font-bold" >Fast, Reliable Spot Quotes to <LinearGradientText text="Simplify Your Freight Booking" /></h1>} description={['MGC Freight eliminates the hassle of spot quoting, reducing your workload and boosting efficiency.', 'Looking for PTL or FTL services? Let us connect you with the best options and pricing through our trusted carrier network!']} />
    },
    {
        title: 'Claims',
        component: <TabNoSlider title={<h1 className="sm:!text-3xl text-lg font-bold" >Simplified and Swift <LinearGradientText text="Claims Resolution" /></h1>} description={['Say goodbye to the hassle of filing claims with MGC Freight! Our intuitive claims system ensures quick and easy resolutions.', 'Need assistance? Our dedicated and friendly claims experts are here to guide you every step of the way.']} />
    }
]


export const dropdowns=['Services','About Us','Partnerships','Resources']



export const megaMenu = [megaMenuServices, megaMenuAbout, megaMenuPartnerships, megaMenuResources]


export const reasonsToChooseUs=[
    {
        imageSrc:"/icons/success.svg",
        title:"Success Together",
        description:"We do big things when we are inclusive and work together. To perform with excellence, we learn from one another, value diverse perspectives, operate safely, and build strong relationships. We welcome everyone regardless of background, identity or ability."
    },
    {
        imageSrc:"/icons/leading.svg",
        title:"Leading Results",
        description:"Customers, carriers, stakeholders and colleagues demand best-in-class performance, so we never stop listening, understanding needs, and executing with integrity. We make transportation simpler and more effective for everyone."
    },
    {
        imageSrc:"/icons/spirit.svg",
        title:"Pioneering Spirit",
        description:"We’re passionate about creating cutting-edge technologies and solutions that connect customers and carriers with the right capacity. We always look boldly ahead to what’s next."
    },
    {
        imageSrc:"/icons/mindset.svg",
        title:"ENTREPRENEURIAL Mindset",
        description:"We know the success of our customers, carriers and company is in our hands. We take it upon ourselves to solve problems and out perform."
    },
    {
        imageSrc:"/icons/agile.svg",
        title:"Agile Approach",
        description:"We move quickly and adapt easily. We leverage technology, data and expertise to anticipate and create the right capacity where it’s needed."
    }
]


export const managementPlatformTabs:TabItemProp = [
    {
        title: 'Dashboard',
        component: <div className="w-full "><Image src={'/images/platform.svg'} alt="platform" className="h-full w-full " width={1000} height={1000}/></div>,
        titleExtraClass:"blue"
    },
    {
        title: "Real-Time Quotes",
        component: <TabWithSlider title={<h1 className="sm:!text-3xl text-lg font-bold" >Trusted Courier Partner Solutions for <LinearGradientText text="Seamless Deliveries" /></h1>} description={['Enhance your shipping capabilities with MGC Freight’s reliable courier partnerships. We ensure timely deliveries, secure handling, and exceptional service, providing your business with the flexibility and efficiency needed to satisfy your customers every step of the way.']} carousel={[{ imageSrc: "/couriers/Artboard.svg", description: "Shipping, courier, and expedited transport services within the US, Canada." }, { imageSrc: "/couriers/gardewine.svg", description: "Leading trucking company providing logistics services across Canada for 70+ years." }, { imageSrc: "/couriers/DayandRoss.svg", description: "Logistics company that operates in various sectors, including logistics solutions" }, { description: "Canada’s most trusted transport carrier for over 60 years.", imageSrc: "/couriers/M-O-2.svg" }, { imageSrc: "/couriers/kindersley.svg", description: "Providing truckload and LTL service throughout North America" }, { imageSrc: "/couriers/DHL.svg", description: "American-founded German logistics company delivering over 1.8 billion parcels per year." }, { imageSrc: "/couriers/Canpar.svg", description: "Helping small parcel delivery companies’ shipping processes on a day-to-day basis." }]} />,
        titleExtraClass:"blue"
    },
    {
        title: "Tracking",
        component: <TabWithSlider title={<h1 className="sm:!text-3xl text-lg font-bold" >Reliable <LinearGradientText text="LTL (Less Than Truckload)" /> Partner Solutions</h1>} description={['Optimize your freight shipping with MGC Freight’s LTL services. We provide cost-effective and flexible solutions, ensuring your smaller shipments are delivered safely and on time, no matter the destination.']} carousel={[{ imageSrc: "/couriers/Artboard.svg", description: "Shipping, courier, and expedited transport services within the US, Canada." }, { imageSrc: "/couriers/gardewine.svg", description: "Leading trucking company providing logistics services across Canada for 70+ years." }, { imageSrc: "/couriers/DayandRoss.svg", description: "Logistics company that operates in various sectors, including logistics solutions" }, { description: "Canada’s most trusted transport carrier for over 60 years.", imageSrc: "/couriers/M-O-2.svg" }, { imageSrc: "/couriers/kindersley.svg", description: "Providing truckload and LTL service throughout North America" }, { imageSrc: "/couriers/DHL.svg", description: "American-founded German logistics company delivering over 1.8 billion parcels per year." }, { imageSrc: "/couriers/Canpar.svg", description: "Helping small parcel delivery companies’ shipping processes on a day-to-day basis." }]} />,
        titleExtraClass:"blue"
    },
    {
        title: "Pickup",
        component: <TabNoSlider title={<h1 className="sm:!text-3xl text-lg font-bold" >The <LinearGradientText text="Ultimate Platform" /> for Freight Brokers</h1>} description={['Streamline your operations with MGC Freight’s broker-friendly solutions. We offer efficient tools and reliable support to help you manage shipments, connect with carriers, and ensure seamless deliveries for your clients.']} />,
        titleExtraClass:"blue"
    }
]


export const faqs=[
    {
        title:"How do I create a new shipment order through MGC Freight?",
        content:'To create a new shipment, log into your account and click on the "Create New Shipment" button. Fill in the necessary details, such as destination and shipment type, and submit the order.'
    },
    {
        title:"What types of freight services are available through MGC Freight for my business needs?",
        content:"We offer air, sea, and ground shipping services, each designed to optimize cost, time, and reliability for your specific logistics requirements."
    },
    {
        title:"How can I track the status of my shipment in real-time using your platform?",
        content:'To create a new shipment, log into your account and click on the "Create New Shipment" button. Fill in the necessary details, such as destination and shipment type, and submit the order.'
    },
    {
        title:"What payment methods are accepted when using MGC Freight services for shipping orders?",
        content:'To create a new shipment, log into your account and click on the "Create New Shipment" button. Fill in the necessary details, such as destination and shipment type, and submit the order.'
    }
]

