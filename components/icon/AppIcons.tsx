'use client';
import { IconType } from 'react-icons';
import {
	BiAddToQueue,
	BiGlobe,
	BiImage,
	BiRestaurant,
	BiShow,
	BiSolidBookContent,
	BiSolidBusiness,
	BiSolidPhotoAlbum
} from 'react-icons/bi';
import {
	BsBoxes,
	BsBuildingAdd,
	BsCalendarRange,
	BsCash,
	BsCashCoin,
	BsCashStack,
	BsChevronRight,
	BsCurrencyEuro,
	BsDatabaseAdd,
	BsDatabaseUp,
	BsFileEarmark,
	BsFileEarmarkText,
	BsFileRichtextFill,
	BsFiletypeCss,
	BsFiletypeJpg,
	BsFiletypeJs,
	BsFiletypeJson,
	BsFiletypeJsx,
	BsFiletypeMd,
	BsFiletypeMdx,
	BsFiletypePdf,
	BsFiletypePhp,
	BsFiletypePng,
	BsFiletypeScss,
	BsFiletypeSvg,
	BsFiletypeTsx,
	BsFiletypeTxt,
	BsFillBoxFill,
	BsFillBuildingsFill,
	BsFillCalendar2CheckFill,
	BsFillCalendar2PlusFill,
	BsFillCalendar2WeekFill,
	BsFillCalendarXFill,
	BsFillCheckCircleFill,
	BsFillFileEarmarkFill,
	BsFillHouseAddFill,
	BsFillHousesFill,
	BsLayoutSidebar,
	BsMarkdown,
	BsNewspaper,
	BsPersonAdd,
	BsShieldLock,
	BsTerminalFill,
	BsThreeDots,
	BsThreeDotsVertical
} from 'react-icons/bs';
import { GiCash, GiLovers, GiVideoConference } from 'react-icons/gi';
import { HiHomeModern } from 'react-icons/hi2';
import {
	LuCalendarClock,
	LuCog,
	LuFileClock,
	LuFolderClock,
	LuLayoutGrid,
	LuRefreshCw
} from 'react-icons/lu';
import {
	MdAdd,
	MdApi,
	MdAppRegistration,
	MdCardMembership,
	MdCastForEducation,
	MdCurrencyPound,
	MdCurrencyRuble,
	MdCurrencyRupee,
	MdErrorOutline,
	MdFactCheck,
	MdFormatListBulleted,
	MdFormatListBulletedAdd,
	MdInventory,
	MdKeyboardArrowDown,
	MdKeyboardArrowLeft,
	MdKeyboardArrowRight,
	MdKeyboardArrowUp,
	MdModeEdit,
	MdOutlineAddBusiness,
	MdOutlineAdminPanelSettings,
	MdOutlineCurrencyBitcoin,
	MdOutlineCurrencyFranc,
	MdOutlineCurrencyLira,
	MdOutlineDesignServices,
	MdOutlineForest,
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowRight,
	MdOutlineLocalGroceryStore,
	MdOutlineLocalShipping,
	MdOutlineMapsHomeWork,
	MdOutlineMeetingRoom,
	MdOutlinePunchClock,
	MdOutlineScreenSearchDesktop,
	MdOutlineVideoLibrary,
	MdOutlineWeb,
	MdSupport,
	MdSwitchAccessShortcutAdd,
	MdVideocam,
	MdWorkspacePremium
} from 'react-icons/md';
import {
	RiBook3Line,
	RiCodeBoxLine,
	RiFolderSettingsFill,
	RiInstallLine,
	RiListSettingsFill,
	RiMoneyDollarBoxLine,
	RiNftFill,
	RiPagesFill,
	RiPagesLine,
	RiProfileLine,
	RiRefund2Fill,
	RiSecurePaymentFill,
	RiShoppingBag3Fill,
	RiSurveyLine,
	RiUninstallFill,
	RiVideoChatFill
} from 'react-icons/ri';
import {
	TbApi,
	TbBrandPrisma,
	TbCircleDotFilled,
	TbCircleLetterC,
	TbCurrencyAfghani,
	TbCurrencyBahraini,
	TbCurrencyBitcoin,
	TbCurrencyCent,
	TbCurrencyDinar,
	TbCurrencyDirham,
	TbCurrencyDogecoin,
	TbCurrencyDram,
	TbCurrencyEthereum,
	TbCurrencyLari,
	TbCurrencyLitecoin,
	TbCurrencyRiyal,
	TbCurrencyTenge,
	TbCurrencyWon,
	TbCurrencyZloty,
	TbHexagonLetterF,
	TbHomeCog,
	TbKey,
	TbLayoutGridAdd,
	TbLetterM,
	TbMovie,
	TbRobot,
	TbServer2,
	TbSquareLetterB,
	TbToml,
	TbTools
} from 'react-icons/tb';
import {
	VscArrowLeft,
	VscArrowRight,
	VscCollapseAll,
	VscFilter,
	VscGithub,
	VscJson,
	VscLaw,
	VscLayoutPanel,
	VscLayoutSidebarLeftOff,
	VscLayoutSidebarRightOff,
	VscNewFile,
	VscNewFolder,
	VscPreview,
	VscRefresh,
	VscSave,
	VscSettingsGear
} from 'react-icons/vsc';

import {
	FaAddressCard,
	FaAdversal,
	FaArrowUpFromBracket,
	FaBars,
	FaBarsStaggered,
	FaBlogger,
	FaBook,
	FaBots,
	FaBoxArchive,
	FaBuilding,
	FaBuildingColumns,
	FaBusinessTime,
	FaCalendar,
	FaCar,
	FaCarRear,
	FaCartFlatbed,
	FaCartPlus,
	FaCashRegister,
	FaChalkboardUser,
	FaChartArea,
	FaChartBar,
	FaChartColumn,
	FaChartLine,
	FaChartPie,
	FaChartSimple,
	FaCircleInfo,
	FaClipboardUser,
	FaClockRotateLeft,
	FaCloud,
	FaCloudArrowUp,
	FaCloudSunRain,
	FaCode,
	FaCodeBranch,
	FaDatabase,
	FaDesktop,
	FaDiagramProject,
	FaDiceD6,
	FaDocker,
	FaDollarSign,
	FaDownload,
	FaEnvelope,
	FaEnvelopesBulk,
	FaFacebook,
	FaFileContract,
	FaFileInvoice,
	FaFilePen,
	FaFingerprint,
	FaFlag,
	FaFolder,
	FaFolderOpen,
	FaFonticons,
	FaGear,
	FaGears,
	FaGithub,
	FaGlasses,
	FaGlobe,
	FaGoogle,
	FaGoogleDrive,
	FaGooglePlay,
	FaGooglePlus,
	FaGraduationCap,
	FaHandHoldingDollar,
	FaHandshake,
	FaHardDrive,
	FaHeadset,
	FaHotel,
	FaHouse,
	FaHouseTsunami,
	FaIcons,
	FaIdCard,
	FaInfo,
	FaInstagram,
	FaLaptopCode,
	FaLaptopFile,
	FaLinkedinIn,
	FaListCheck,
	FaLocationArrow,
	FaLocationCrosshairs,
	FaLocationDot,
	FaLock,
	FaMagnifyingGlass,
	FaMapLocationDot,
	FaMartiniGlass,
	FaMasksTheater,
	FaMedal,
	FaMoneyBillTrendUp,
	FaMoneyCheck,
	FaMoneyCheckDollar,
	FaMusic,
	FaNodeJs,
	FaPaintbrush,
	FaPalette,
	FaPenToSquare,
	FaPeopleRobbery,
	FaPersonChalkboard,
	FaPesoSign,
	FaPhone,
	FaPhotoFilm,
	FaPlane,
	FaPlaneArrival,
	FaPowerOff,
	FaQuestion,
	FaRegAddressCard,
	FaRegBell,
	FaRegCreditCard,
	FaRegHeart,
	FaRegObjectGroup,
	FaRegistered,
	FaRightToBracket,
	FaRobot,
	FaScrewdriverWrench,
	FaServer,
	FaShieldHalved,
	FaShop,
	FaSignature,
	FaStar,
	FaStore,
	FaSuitcaseRolling,
	FaTaxi,
	FaTimeline,
	FaTrademark,
	FaTrashCan,
	FaTruckFast,
	FaTruckRampBox,
	FaTwitter,
	FaUpload,
	FaUser,
	FaUserAstronaut,
	FaUserClock,
	FaUserGraduate,
	FaUserSecret,
	FaUserTie,
	FaUsersGear,
	FaWandMagicSparkles,
	FaWarehouse,
	FaWpforms,
	FaXmark,
	FaYenSign
} from 'react-icons/fa6';
import {
	SiBlockchaindotcom,
	SiCampaignmonitor,
	SiCkeditor4,
	SiCoinmarketcap,
	SiGitignoredotio,
	SiHiveBlockchain
} from 'react-icons/si';

const AppIcons: { [key: string]: IconType } = {
	fileDownArrow: MdOutlineKeyboardArrowDown,
	fileRightArrow: MdOutlineKeyboardArrowRight,
	fileItem: BsFillFileEarmarkFill,
	folderClose: FaFolder,
	folderOpen: FaFolderOpen,
	terminal: BsTerminalFill,
	error: MdErrorOutline,
	moduleOptions: RiListSettingsFill,
	appSettings: MdAppRegistration,
	updateForm: MdFormatListBulleted,
	addForm: MdFormatListBulletedAdd,
	module: BsBoxes,
	market: RiShoppingBag3Fill,
	marketplace: RiShoppingBag3Fill,
	bars: FaBars,
	bar: FaBars,
	sidebar: BsLayoutSidebar,
	dot: TbCircleDotFilled,
	checked: BsFillCheckCircleFill,
	infoCircle: FaCircleInfo,
	uninstall: RiUninstallFill,
	install: RiInstallLine,
	employment: MdOutlineMapsHomeWork,
	education: MdCastForEducation,
	view: BiShow,
	star: FaStar,
	liveEdit: SiCkeditor4,
	agreement: BsShieldLock,
	arrowRight: MdKeyboardArrowRight,
	arrowLeft: MdKeyboardArrowLeft,
	arrowUp: MdKeyboardArrowUp,
	arrowDown: MdKeyboardArrowDown,
	myApps: BsFillBoxFill,
	organizations: BsFillBuildingsFill,
	organization: BsFillBuildingsFill,
	portfolio: BiSolidPhotoAlbum,
	resume: RiProfileLine,
	edit: MdModeEdit,
	proposals: BsFileRichtextFill,
	proposal: BsFileRichtextFill,
	payments: RiSecurePaymentFill,
	payment: RiSecurePaymentFill,
	restaurant: BiRestaurant,
	premium: MdWorkspacePremium,
	chevNext: BsChevronRight,
	googleDrive: FaGoogleDrive,
	googlePlus: FaGooglePlus,
	googlePlay: FaGooglePlay,
	google: FaGoogle,
	linkedin: FaLinkedinIn,
	github: FaGithub,
	instagram: FaInstagram,
	twitter: FaTwitter,
	facebook: FaFacebook,
	dbBackup: BsDatabaseUp,
	cog: LuCog,
	shield: FaShieldHalved,
	refresh: LuRefreshCw,
	cloud: FaCloud,
	lock: FaLock,
	register: FaRegAddressCard,
	admin: MdOutlineAdminPanelSettings,
	chartCol: FaChartColumn,
	chartPie: FaChartPie,
	chartLine: FaChartLine,
	chartBar: FaChartBar,
	chartArea: FaChartArea,
	chartSimple: FaChartSimple,
	signUp: FaArrowUpFromBracket,
	signOut: FaPowerOff,
	signIn: FaRightToBracket,
	toolsUtils: TbTools,
	addCompany: BsBuildingAdd,
	addHome: BsFillHouseAddFill,
	addUser: BsPersonAdd,
	addIcon: MdSwitchAccessShortcutAdd,
	addBlock: BiAddToQueue,
	addDatabase: BsDatabaseAdd,
	addApp: TbLayoutGridAdd,
	add: MdAdd,
	analytics: FaChartLine,
	jobs: FaPersonChalkboard,
	forms: FaWpforms,
	user: FaUser,
	search: FaMagnifyingGlass,
	menuStaggered: FaBarsStaggered,
	menu: FaBars,
	generate: FaFilePen,
	contracts: FaFileContract,
	templates: FaRegObjectGroup,
	vault: FaUserSecret,
	travel: FaPlaneArrival,
	booking: FaSuitcaseRolling,
	sign: FaSignature,
	awards: FaMedal,
	vacation: FaHouseTsunami,
	accounting: FaHandHoldingDollar,
	blockDice: FaDiceD6,
	homeRentals: HiHomeModern,
	archive: FaBoxArchive,
	advertising: FaAdversal,
	contacts: FaAddressCard,
	emailCampaign: FaEnvelopesBulk,
	entertainment: FaMasksTheater,
	subscriptions: MdCardMembership,
	apiIcon: MdApi,
	robot: FaUserAstronaut,
	users: FaUsersGear,
	todo: FaListCheck,
	cloudUpload: FaCloudArrowUp,
	upload: FaUpload,
	invoicing: FaFileInvoice,
	warehouse: FaWarehouse,
	api: TbApi,
	notification: FaRegBell,
	icons: FaIcons,
	fonts: FaFonticons,
	video: MdVideocam,
	player: MdOutlineVideoLibrary,
	about: FaInfo,
	info: BiSolidBusiness,
	connectVideo: RiVideoChatFill,
	bank: FaBuildingColumns,
	timeline: FaTimeline,
	clockInOut: FaUserClock,
	clock: FaClockRotateLeft,
	timesheet: LuCalendarClock,
	documentation: FaBook,
	pos: FaCashRegister,
	help: FaQuestion,
	weather: FaCloudSunRain,
	dashboard: FaDesktop,
	email: FaEnvelope,
	countries: FaFlag,
	biometrics: FaFingerprint,
	website: FaGlobe,
	knowledge: FaGlasses,
	support: FaHeadset,
	club: FaMartiniGlass,
	music: FaMusic,
	employee: FaUserTie,
	hr: FaBusinessTime,
	theme: FaWandMagicSparkles,
	favorite: FaRegHeart,
	creditCard: FaRegCreditCard,
	trash: FaTrashCan,
	server: FaServer,
	events: FaMasksTheater,
	ticketing: MdSupport,
	hotel: FaHotel,
	blogs: FaBlogger,
	aiAssist: FaBots,
	calendar: FaCalendar,
	carRental: FaCarRear,
	taxi: FaTaxi,
	cart: FaCartPlus,
	board: FaChalkboardUser,
	sales: FaMoneyBillTrendUp,
	inventory: MdInventory,
	delivery: FaTruckFast,
	moving: FaTruckRampBox,
	fileManagement: FaDownload,
	storage: FaHardDrive,
	crm: FaHandshake,
	project: FaLaptopFile,
	projects: FaLaptopFile,
	ban: BsFileEarmark,
	learn: FaGraduationCap,
	dating: GiLovers,
	cms: BiSolidBookContent,
	close: FaXmark,
	database: FaDatabase,
	apps: LuLayoutGrid,
	appointment: BsCalendarRange,
	appointments: BsFillCalendar2WeekFill,
	addAppointment: BsFillCalendar2PlusFill,
	deleteAppointment: BsFillCalendarXFill,
	checkAppointmnet: BsFillCalendar2CheckFill,
	company: BsBuildingAdd,
	notes: FaPenToSquare,
	account: FaClipboardUser,
	configure: FaGear,
	gears: FaGears,
	profile: FaIdCard,
	ecommerce: FaShop,
	shop: FaStore,
	cash: BsCash,
	expenses: BsCashCoin,
	dollar: FaDollarSign,
	peso: FaPesoSign,
	riyal: TbCurrencyRiyal,
	yen: FaYenSign,
	dinar: TbCurrencyDinar,
	cent: TbCurrencyCent,
	afghani: TbCurrencyAfghani,
	bahraini: TbCurrencyBahraini,
	dogecoin: TbCurrencyDogecoin,
	won: TbCurrencyWon,
	tenge: TbCurrencyTenge,
	dram: TbCurrencyDram,
	ethereum: TbCurrencyEthereum,
	litecoin: TbCurrencyLitecoin,
	lari: TbCurrencyLari,
	zloty: TbCurrencyZloty,
	euro: BsCurrencyEuro,
	dirham: TbCurrencyDirham,
	pound: MdCurrencyPound,
	lira: MdOutlineCurrencyLira,
	franc: MdOutlineCurrencyFranc,
	ruble: MdCurrencyRuble,
	rupee: MdCurrencyRupee,
	bitcoin: MdOutlineCurrencyBitcoin,
	trademark: FaTrademark,
	registered: FaRegistered,
	addShop: MdOutlineAddBusiness,
	gallery: FaPhotoFilm,
	home: FaHouse,
	code: FaLaptopCode,
	map: FaMapLocationDot,
	marker: FaLocationDot,
	currentLocation: FaLocationCrosshairs,
	location: FaLocationArrow,
	draw: FaPalette,
	paint: FaPaintbrush,
	airline: FaPlane,
	aiBot: FaRobot,
	repair: FaScrewdriverWrench,
	movies: TbMovie,
	develop: FaCode,
	integration: FaCodeBranch,
	hosting: TbServer2,
	conference: GiVideoConference,
	meetings: MdOutlineMeetingRoom,
	refunds: RiRefund2Fill,
	products: FaCartFlatbed,
	shipping: MdOutlineLocalShipping,
	financial: GiCash,
	flow: TbHexagonLetterF,
	connect: TbCircleLetterC,
	blocks: TbSquareLetterB,
	letterM: TbLetterM,
	markdown: BsMarkdown,
	markedit: SiCoinmarketcap,
	diagrams: FaDiagramProject,
	pages: RiPagesLine,
	surveys: RiSurveyLine,
	crypto: TbCurrencyBitcoin,
	currency: BsCashStack,
	blockchain: SiHiveBlockchain,
	blockDot: SiBlockchaindotcom,
	nfts: RiNftFill,
	campaign: SiCampaignmonitor,
	marketing: BsNewspaper,
	payroll: FaMoneyCheck,
	checkDollar: FaMoneyCheckDollar,
	attendance: LuFolderClock,
	leave: LuFileClock,
	clockin: MdOutlinePunchClock,
	elearning: FaUserGraduate,
	lms: RiBook3Line,
	rentals: TbKey,
	documents: RiFolderSettingsFill,
	coding: RiCodeBoxLine,
	aiAssistant: TbRobot,
	pageBuilder: RiPagesFill,
	webDesign: MdOutlineWeb,
	vehicle: FaCar,
	maintenance: TbHomeCog,
	groceries: MdOutlineLocalGroceryStore,
	budget: RiMoneyDollarBoxLine,
	listings: BsFillHousesFill,
	domains: BiGlobe,
	swinger: FaPeopleRobbery,
	phone: FaPhone,
	layout: MdOutlineDesignServices,
	fileIcon: BsFileEarmark,
	ts: BsFiletypeTsx,
	tsx: BsFiletypeTsx,
	js: BsFiletypeJs,
	jsx: BsFiletypeJsx,
	css: BsFiletypeCss,
	scss: BsFiletypeScss,
	json: BsFiletypeJson,
	env: BsFileEarmarkText,
	local: BsFileEarmarkText,
	md: BsFiletypeMd,
	png: BsFiletypePng,
	txt: BsFiletypeTxt,
	gitignore: SiGitignoredotio,
	git: SiGitignoredotio,
	mdx: BsFiletypeMdx,
	php: BsFiletypePhp,
	pdf: BsFiletypePdf,
	prisma: TbBrandPrisma,
	node: FaNodeJs,
	ico: BiImage,
	svg: BsFiletypeSvg,
	jpg: BsFiletypeJpg,
	toml: TbToml,
	dockerignore: FaDocker,
	docker: FaDocker,
	Dockerfile: FaDocker,
	h3Dots: BsThreeDots,
	v3Dots: BsThreeDotsVertical,
	layoutSideLeft: VscLayoutSidebarLeftOff,
	layoutSideRight: VscLayoutSidebarRightOff,
	layoutPanel: VscLayoutPanel,
	filter: VscFilter,
	VscArrowLeft: VscArrowLeft,
	VscArrowRight: VscArrowRight,
	newFile: VscNewFile,
	newFolder: VscNewFolder,
	collapseAll: VscCollapseAll,
	VscRefresh: VscRefresh,
	VscSettings: VscSettingsGear,
	VscJson: VscJson,
	VscGithub: VscGithub,
	preview: VscPreview,
	save: VscSave,
	building: FaBuilding,
	forest: MdOutlineForest,
	quality: MdFactCheck,
	law: VscLaw,
	research: MdOutlineScreenSearchDesktop
};

export default AppIcons;