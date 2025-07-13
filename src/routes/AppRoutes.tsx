import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ProtectedRoute } from '@/routes/ProtectedRoute';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { useAuth } from '@/hooks/useAuth';
import MasterLayout from '@/layouts/_MasterLayout';

// Authentication Pages
const Login = lazy(() => import('@/pages/auth/Login'));
const Register = lazy(() => import('@/pages/auth/Register'));
const ForgotPassword = lazy(() => import('@/pages/auth/ForgotPassword'));
const ResetPassword = lazy(() => import('@/pages/auth/ResetPassword'));
const EmailVerification = lazy(() => import('@/pages/auth/EmailVerification'));
const TwoFactorAuth = lazy(() => import('@/pages/auth/TwoFactorAuth'));
const RegisterSuccess = lazy(() => import('@/pages/auth/RegisterSuccess'));

// Common Pages
const ProfileView = lazy(() => import('@/pages/common/ProfileView'));
const ProfileEdit = lazy(() => import('@/pages/common/ProfileEdit'));
const AccountSettings = lazy(() => import('@/pages/common/AccountSettings'));
const PrivacySettings = lazy(() => import('@/pages/common/PrivacySettings'));
const NotificationSettings = lazy(() => import('@/pages/common/NotificationSettings'));
const PasswordChange = lazy(() => import('@/pages/common/PasswordChange'));

// Error Pages
const NotFound = lazy(() => import('@/pages/errors/NotFound'));
const ServerError = lazy(() => import('@/pages/errors/ServerError'));
const Forbidden = lazy(() => import('@/pages/errors/Forbidden'));
const Maintenance = lazy(() => import('@/pages/errors/Maintenance'));

// Mother Role Pages
const MotherDashboard = lazy(() => import('@/pages/mother/MotherDashboard'));
const TodaySummary = lazy(() => import('@/pages/mother/TodaySummary'));
const WeeklyOverview = lazy(() => import('@/pages/mother/WeeklyOverview'));
const BabyList = lazy(() => import('@/pages/mother/BabyList'));
const AddBaby = lazy(() => import('@/pages/mother/AddBaby'));
const BabyProfile = lazy(() => import('@/pages/mother/BabyProfile'));
const EditBaby = lazy(() => import('@/pages/mother/EditBaby'));
const BabyDashboard = lazy(() => import('@/pages/mother/BabyDashboard'));
const GrowthRecords = lazy(() => import('@/pages/mother/GrowthRecords'));
const GrowthCharts = lazy(() => import('@/pages/mother/GrowthCharts'));
const MilestonesTracker = lazy(() => import('@/pages/mother/MilestonesTracker'));
const MilestoneDetails = lazy(() => import('@/pages/mother/MilestoneDetails'));
const BabyPhotoDiary = lazy(() => import('@/pages/mother/BabyPhotoDiary'));
const AddPhotos = lazy(() => import('@/pages/mother/AddPhotos'));
const LanguageDevelopment = lazy(() => import('@/pages/mother/LanguageDevelopment'));
const MoodPatterns = lazy(() => import('@/pages/mother/MoodPatterns'));
const DailyLog = lazy(() => import('@/pages/mother/DailyLog'));
const FeedingLog = lazy(() => import('@/pages/mother/FeedingLog'));
const AddFeedingEntry = lazy(() => import('@/pages/mother/AddFeedingEntry'));
const SleepLog = lazy(() => import('@/pages/mother/SleepLog'));
const DiaperLog = lazy(() => import('@/pages/mother/DiaperLog'));
const ActivityLog = lazy(() => import('@/pages/mother/ActivityLog'));
const AddActivity = lazy(() => import('@/pages/mother/AddActivity'));
const VaccinationRecords = lazy(() => import('@/pages/mother/VaccinationRecords'));
const VaccinationSchedule = lazy(() => import('@/pages/mother/VaccinationSchedule'));
const AddVaccination = lazy(() => import('@/pages/mother/AddVaccination'));
const MHealthRecords = lazy(() => import('@/pages/mother/HealthRecords'));
const Appointments = lazy(() => import('@/pages/mother/Appointments'));
const BookAppointment = lazy(() => import('@/pages/mother/BookAppointment'));
const DoctorProfiles = lazy(() => import('@/pages/mother/DoctorProfiles'));
const DoctorDetails = lazy(() => import('@/pages/mother/DoctorDetails'));
const MEmergencyContacts = lazy(() => import('@/pages/mother/EmergencyContacts'));
const HealthProviders = lazy(() => import('@/pages/mother/HealthProviders'));
const MaternalHealth = lazy(() => import('@/pages/mother/MaternalHealth'));
const PostpartumRecovery = lazy(() => import('@/pages/mother/PostpartumRecovery'));
const MentalHealth = lazy(() => import('@/pages/mother/MentalHealth'));
const SelfCareActivities = lazy(() => import('@/pages/mother/SelfCareActivities'));
const ExercisePrograms = lazy(() => import('@/pages/mother/ExercisePrograms'));
const ExerciseLog = lazy(() => import('@/pages/mother/ExerciseLog'));
const NutritionTracking = lazy(() => import('@/pages/mother/NutritionTracking'));
const WorkLifeBalance = lazy(() => import('@/pages/mother/WorkLifeBalance'));
const EducationalContent = lazy(() => import('@/pages/mother/EducationalContent'));
const ContentDetails = lazy(() => import('@/pages/mother/ContentDetails'));
const MTraditionalPractices = lazy(() => import('@/pages/mother/TraditionalPractices'));
const Recipes = lazy(() => import('@/pages/mother/Recipes'));
const RecipeDetails = lazy(() => import('@/pages/mother/RecipeDetails'));
const DevelopmentalGames = lazy(() => import('@/pages/mother/DevelopmentalGames'));
const GameDetails = lazy(() => import('@/pages/mother/GameDetails'));
const BabyMassage = lazy(() => import('@/pages/mother/BabyMassage'));
const SeasonalGuidelines = lazy(() => import('@/pages/mother/SeasonalGuidelines'));
const LocalLullabies = lazy(() => import('@/pages/mother/LocalLullabies'));
const Forums = lazy(() => import('@/pages/mother/Forums'));
const ForumPosts = lazy(() => import('@/pages/mother/ForumPosts'));
const PostDetails = lazy(() => import('@/pages/mother/PostDetails'));
const CreatePost = lazy(() => import('@/pages/mother/CreatePost'));
const ChatGroups = lazy(() => import('@/pages/mother/ChatGroups'));
const ChatRoom = lazy(() => import('@/pages/mother/ChatRoom'));
const LocalEvents = lazy(() => import('@/pages/mother/LocalEvents'));
const EventDetails = lazy(() => import('@/pages/mother/EventDetails'));
const SupportNetwork = lazy(() => import('@/pages/mother/SupportNetwork'));
const MStories = lazy(() => import('@/pages/mother/Stories'));
const StoryDetails = lazy(() => import('@/pages/mother/StoryDetails'));
const MemoryBook = lazy(() => import('@/pages/mother/MemoryBook'));
const CreateMemory = lazy(() => import('@/pages/mother/CreateMemory'));
const MemoryDetails = lazy(() => import('@/pages/mother/MemoryDetails'));
const PregnancyJournal = lazy(() => import('@/pages/mother/PregnancyJournal'));
const JournalEntry = lazy(() => import('@/pages/mother/JournalEntry'));
const Reminders = lazy(() => import('@/pages/mother/Reminders'));
const AddReminder = lazy(() => import('@/pages/mother/AddReminder'));
const NightRoutines = lazy(() => import('@/pages/mother/NightRoutines'));
const EmergencyGuide = lazy(() => import('@/pages/mother/EmergencyGuide'));
const Products = lazy(() => import('@/pages/mother/Products'));
const ProductDetails = lazy(() => import('@/pages/mother/ProductDetails'));
const MProductReviews = lazy(() => import('@/pages/mother/ProductReviews'));
const PartnerListings = lazy(() => import('@/pages/mother/PartnerListings'));
const PartnerDetails = lazy(() => import('@/pages/mother/PartnerDetails'));
const ShoppingCart = lazy(() => import('@/pages/mother/ShoppingCart'));
const MOrderHistory = lazy(() => import('@/pages/mother/OrderHistory'));
const Wishlist = lazy(() => import('@/pages/mother/Wishlist'));
const RewardsDashboard = lazy(() => import('@/pages/mother/RewardsDashboard'));
const AvailableRewards = lazy(() => import('@/pages/mother/AvailableRewards'));
const RewardDetails = lazy(() => import('@/pages/mother/RewardDetails'));
const RedemptionHistory = lazy(() => import('@/pages/mother/RedemptionHistory'));
const ActivityChallenges = lazy(() => import('@/pages/mother/ActivityChallenges'));
const Achievements = lazy(() => import('@/pages/mother/Achievements'));
const Leaderboard = lazy(() => import('@/pages/mother/Leaderboard'));

// Admin Role Pages
const AdminDashboard = lazy(() => import('@/pages/admin/AdminDashboard'));
const SystemHealth = lazy(() => import('@/pages/admin/SystemHealth'));
const RealTimeAnalytics = lazy(() => import('@/pages/admin/RealTimeAnalytics'));
const AllUsers = lazy(() => import('@/pages/admin/AllUsers'));
const UserDetails = lazy(() => import('@/pages/admin/UserDetails'));
const UserAnalytics = lazy(() => import('@/pages/admin/UserAnalytics'));
const AUserActivity = lazy(() => import('@/pages/admin/UserActivity'));
const RoleManagement = lazy(() => import('@/pages/admin/RoleManagement'));
const BulkUserActions = lazy(() => import('@/pages/admin/BulkUserActions'));
const AllContent = lazy(() => import('@/pages/admin/AllContent'));
const ContentApproval = lazy(() => import('@/pages/admin/ContentApproval'));
const AContentAnalytics = lazy(() => import('@/pages/admin/ContentAnalytics'));
const MediaManagement = lazy(() => import('@/pages/admin/MediaManagement'));
const DoctorManagement = lazy(() => import('@/pages/admin/DoctorManagement'));
const HealthProviderDirectory = lazy(() => import('@/pages/admin/HealthProviderDirectory'));
const AppointmentSystem = lazy(() => import('@/pages/admin/AppointmentSystem'));
const MedicalRecords = lazy(() => import('@/pages/admin/MedicalRecords'));
const PartnerDirectory = lazy(() => import('@/pages/admin/PartnerDirectory'));
const PartnerApplications = lazy(() => import('@/pages/admin/PartnerApplications'));
const PartnerPerformance = lazy(() => import('@/pages/admin/PartnerPerformance'));
const CommissionManagement = lazy(() => import('@/pages/admin/CommissionManagement'));
const SystemSettings = lazy(() => import('@/pages/admin/SystemSettings'));
const DatabaseManagement = lazy(() => import('@/pages/admin/DatabaseManagement'));
const BackupManagement = lazy(() => import('@/pages/admin/BackupManagement'));
const SecuritySettings = lazy(() => import('@/pages/admin/SecuritySettings'));
const APIManagement = lazy(() => import('@/pages/admin/APIManagement'));
const AuditLogs = lazy(() => import('@/pages/admin/AuditLogs'));
const SystemAnalytics = lazy(() => import('@/pages/admin/SystemAnalytics'));
const AUserReports = lazy(() => import('@/pages/admin/UserReports'));
const BusinessReports = lazy(() => import('@/pages/admin/BusinessReports'));
const PerformanceReports = lazy(() => import('@/pages/admin/PerformanceReports'));
const CustomReports = lazy(() => import('@/pages/admin/CustomReports'));
const NotificationCenter = lazy(() => import('@/pages/admin/NotificationCenter'));
const BulkMessaging = lazy(() => import('@/pages/admin/BulkMessaging'));
const SurveyManagement = lazy(() => import('@/pages/admin/SurveyManagement'));
const AnnouncementSystem = lazy(() => import('@/pages/admin/AnnouncementSystem'));
const RevenueDashboard = lazy(() => import('@/pages/admin/RevenueDashboard'));
const PaymentManagement = lazy(() => import('@/pages/admin/PaymentManagement'));
const SubscriptionManagement = lazy(() => import('@/pages/admin/SubscriptionManagement'));
const FinancialReports = lazy(() => import('@/pages/admin/FinancialReports'));

// Health Provider Role Pages
const ProviderDashboard = lazy(() => import('@/pages/provider/ProviderDashboard'));
const TodaySchedule = lazy(() => import('@/pages/provider/TodaySchedule'));
const PatientSummary = lazy(() => import('@/pages/provider/PatientSummary'));
const CalendarView = lazy(() => import('@/pages/provider/CalendarView'));
const AvailabilitySettings = lazy(() => import('@/pages/provider/AvailabilitySettings'));
const TimeSlots = lazy(() => import('@/pages/provider/TimeSlots'));
const BreakTimeManagement = lazy(() => import('@/pages/provider/BreakTimeManagement'));
const AppointmentHistory = lazy(() => import('@/pages/provider/AppointmentHistory'));
const PatientList = lazy(() => import('@/pages/provider/PatientList'));
const PatientSearch = lazy(() => import('@/pages/provider/PatientSearch'));
const PatientProfile = lazy(() => import('@/pages/provider/PatientProfile'));
const BabyRecords = lazy(() => import('@/pages/provider/BabyRecords'));
const MaternalRecords = lazy(() => import('@/pages/provider/MaternalRecords'));
const PatientHistory = lazy(() => import('@/pages/provider/PatientHistory'));
const HealthRecords = lazy(() => import('@/pages/provider/HealthRecords'));
const VaccinationManagement = lazy(() => import('@/pages/provider/VaccinationManagement'));
const GrowthTracking = lazy(() => import('@/pages/provider/GrowthTracking'));
const MedicalNotes = lazy(() => import('@/pages/provider/MedicalNotes'));
const PrescriptionManagement = lazy(() => import('@/pages/provider/PrescriptionManagement'));
const AppointmentList = lazy(() => import('@/pages/provider/AppointmentList'));
const AppointmentDetails = lazy(() => import('@/pages/provider/AppointmentDetails'));
const ScheduleAppointment = lazy(() => import('@/pages/provider/ScheduleAppointment'));
const RescheduleAppointment = lazy(() => import('@/pages/provider/RescheduleAppointment'));
const AppointmentNotes = lazy(() => import('@/pages/provider/AppointmentNotes'));
const PatientMessages = lazy(() => import('@/pages/provider/PatientMessages'));
const CounselingSessions = lazy(() => import('@/pages/provider/CounselingSessions'));
const SessionNotes = lazy(() => import('@/pages/provider/SessionNotes'));
const EmergencyContacts = lazy(() => import('@/pages/provider/EmergencyContacts'));
const MedicalGuidelines = lazy(() => import('@/pages/provider/MedicalGuidelines'));
const ClinicalResources = lazy(() => import('@/pages/provider/ClinicalResources'));
const ContinuingEducation = lazy(() => import('@/pages/provider/ContinuingEducation'));
const PeerNetwork = lazy(() => import('@/pages/provider/PeerNetwork'));

// Partner Role Pages
const PartnerDashboard = lazy(() => import('@/pages/partner/PartnerDashboard'));
const SalesOverview = lazy(() => import('@/pages/partner/SalesOverview'));
const PerformanceMetrics = lazy(() => import('@/pages/partner/PerformanceMetrics'));
const BusinessProfile = lazy(() => import('@/pages/partner/BusinessProfile'));
const ProductCatalog = lazy(() => import('@/pages/partner/ProductCatalog'));
const AddProduct = lazy(() => import('@/pages/partner/AddProduct'));
const EditProduct = lazy(() => import('@/pages/partner/EditProduct'));
const ProductAnalytics = lazy(() => import('@/pages/partner/ProductAnalytics'));
const InventoryManagement = lazy(() => import('@/pages/partner/InventoryManagement'));
const ProductReviews = lazy(() => import('@/pages/partner/ProductReviews'));
const OrderList = lazy(() => import('@/pages/partner/OrderList'));
const OrderDetails = lazy(() => import('@/pages/partner/OrderDetails'));
const OrderProcessing = lazy(() => import('@/pages/partner/OrderProcessing'));
const ShippingManagement = lazy(() => import('@/pages/partner/ShippingManagement'));
const OrderHistory = lazy(() => import('@/pages/partner/OrderHistory'));
const CustomerList = lazy(() => import('@/pages/partner/CustomerList'));
const CustomerProfile = lazy(() => import('@/pages/partner/CustomerProfile'));
const CustomerReviews = lazy(() => import('@/pages/partner/CustomerReviews'));
const CustomerCommunication = lazy(() => import('@/pages/partner/CustomerCommunication'));
const SalesReports = lazy(() => import('@/pages/partner/SalesReports'));
const PerformanceDashboard = lazy(() => import('@/pages/partner/PerformanceDashboard'));
const CustomerAnalytics = lazy(() => import('@/pages/partner/CustomerAnalytics'));
const ProductPerformance = lazy(() => import('@/pages/partner/ProductPerformance'));
const BusinessInformation = lazy(() => import('@/pages/partner/BusinessInformation'));
const PaymentSettings = lazy(() => import('@/pages/partner/PaymentSettings'));
const ShippingSettings = lazy(() => import('@/pages/partner/ShippingSettings'));
const TaxSettings = lazy(() => import('@/pages/partner/TaxSettings'));

// Content Creator Role Pages
const CreatorDashboard = lazy(() => import('@/pages/creator/CreatorDashboard'));
const ContentCalendar = lazy(() => import('@/pages/creator/ContentCalendar'));
const CcPerformanceMetrics = lazy(() => import('@/pages/creator/PerformanceMetrics'));
const CreateContent = lazy(() => import('@/pages/creator/CreateContent'));
const EditContent = lazy(() => import('@/pages/creator/EditContent'));
const ContentLibrary = lazy(() => import('@/pages/creator/ContentLibrary'));
const DraftManagement = lazy(() => import('@/pages/creator/DraftManagement'));
const MediaLibrary = lazy(() => import('@/pages/creator/MediaLibrary'));
const UploadMedia = lazy(() => import('@/pages/creator/UploadMedia'));
const EducationalArticles = lazy(() => import('@/pages/creator/EducationalArticles'));
const Stories = lazy(() => import('@/pages/creator/Stories'));
const TraditionalPractices = lazy(() => import('@/pages/creator/TraditionalPractices'));
const AudioContent = lazy(() => import('@/pages/creator/AudioContent'));
const VideoContent = lazy(() => import('@/pages/creator/VideoContent'));
const InteractiveContent = lazy(() => import('@/pages/creator/InteractiveContent'));
const PublishingQueue = lazy(() => import('@/pages/creator/PublishingQueue'));
const ContentReview = lazy(() => import('@/pages/creator/ContentReview'));
const VersionControl = lazy(() => import('@/pages/creator/VersionControl'));
const ContentTags = lazy(() => import('@/pages/creator/ContentTags'));
const SEOSettings = lazy(() => import('@/pages/creator/SEOSettings'));
const ContentAnalytics = lazy(() => import('@/pages/creator/ContentAnalytics'));
const AudienceInsights = lazy(() => import('@/pages/creator/AudienceInsights'));
const FeedbackManagement = lazy(() => import('@/pages/creator/FeedbackManagement'));
const ContentTrends = lazy(() => import('@/pages/creator/ContentTrends'));

// Moderator Role Pages
const ModerationDashboard = lazy(() => import('@/pages/moderator/ModerationDashboard'));
const ModerationQueue = lazy(() => import('@/pages/moderator/ModerationQueue'));
const CommunityHealth = lazy(() => import('@/pages/moderator/CommunityHealth'));
const FlaggedContent = lazy(() => import('@/pages/moderator/FlaggedContent'));
const MoContentReview = lazy(() => import('@/pages/moderator/ContentReview'));
const ApprovedContent = lazy(() => import('@/pages/moderator/ApprovedContent'));
const RejectedContent = lazy(() => import('@/pages/moderator/RejectedContent'));
const BulkModeration = lazy(() => import('@/pages/moderator/BulkModeration'));
const UserReports = lazy(() => import('@/pages/moderator/UserReports'));
const UserProfileReview = lazy(() => import('@/pages/moderator/UserProfileReview'));
const UserSanctions = lazy(() => import('@/pages/moderator/UserSanctions'));
const UserCommunication = lazy(() => import('@/pages/moderator/UserCommunication'));
const ForumOverview = lazy(() => import('@/pages/moderator/ForumOverview'));
const ForumCategories = lazy(() => import('@/pages/moderator/ForumCategories'));
const PostManagement = lazy(() => import('@/pages/moderator/PostManagement'));
const CommentManagement = lazy(() => import('@/pages/moderator/CommentManagement'));
const ThreadManagement = lazy(() => import('@/pages/moderator/ThreadManagement'));
const ModerationReports = lazy(() => import('@/pages/moderator/ModerationReports'));
const UserActivity = lazy(() => import('@/pages/moderator/UserActivity'));
const MoContentTrends = lazy(() => import('@/pages/moderator/ContentTrends'));
const CommunityGrowth = lazy(() => import('@/pages/moderator/CommunityGrowth'));
const AutoModerationRules = lazy(() => import('@/pages/moderator/AutoModerationRules'));
const KeywordFilters = lazy(() => import('@/pages/moderator/KeywordFilters'));
const EscalationManagement = lazy(() => import('@/pages/moderator/EscalationManagement'));
const ModerationGuidelines = lazy(() => import('@/pages/moderator/ModerationGuidelines'));

// Expert Role Pages
const ExpertDashboard = lazy(() => import('@/pages/expert/ExpertDashboard'));
const ConsultationRequests = lazy(() => import('@/pages/expert/ConsultationRequests'));
const KnowledgeImpact = lazy(() => import('@/pages/expert/KnowledgeImpact'));
const ConsultationSchedule = lazy(() => import('@/pages/expert/ConsultationSchedule'));
const ActiveConsultations = lazy(() => import('@/pages/expert/ActiveConsultations'));
const ConsultationHistory = lazy(() => import('@/pages/expert/ConsultationHistory'));
const ESessionNotes = lazy(() => import('@/pages/expert/SessionNotes'));
const FollowUpManagement = lazy(() => import('@/pages/expert/FollowUpManagement'));
const KnowledgeBase = lazy(() => import('@/pages/expert/KnowledgeBase'));
const CreateArticle = lazy(() => import('@/pages/expert/CreateArticle'));
const QAManagement = lazy(() => import('@/pages/expert/QAManagement'));
const ExpertWebinars = lazy(() => import('@/pages/expert/ExpertWebinars'));
const WorkshopManagement = lazy(() => import('@/pages/expert/WorkshopManagement'));
const ExpertCommunity = lazy(() => import('@/pages/expert/ExpertCommunity'));
const PeerCollaboration = lazy(() => import('@/pages/expert/PeerCollaboration'));
const ExpertForums = lazy(() => import('@/pages/expert/ExpertForums'));
const MentorshipProgram = lazy(() => import('@/pages/expert/MentorshipProgram'));
const ConsultationMetrics = lazy(() => import('@/pages/expert/ConsultationMetrics'));
const KnowledgeAnalytics = lazy(() => import('@/pages/expert/KnowledgeAnalytics'));
const UserFeedback = lazy(() => import('@/pages/expert/UserFeedback'));
const ProfessionalGrowth = lazy(() => import('@/pages/expert/ProfessionalGrowth'));

// Support Staff Role Pages
const SupportDashboard = lazy(() => import('@/pages/support/SupportDashboard'));
const TicketQueue = lazy(() => import('@/pages/support/TicketQueue'));
const TeamPerformance = lazy(() => import('@/pages/support/TeamPerformance'));
const AllTickets = lazy(() => import('@/pages/support/AllTickets'));
const TicketDetails = lazy(() => import('@/pages/support/TicketDetails'));
const CreateTicket = lazy(() => import('@/pages/support/CreateTicket'));
const TicketAssignment = lazy(() => import('@/pages/support/TicketAssignment'));
const TicketHistory = lazy(() => import('@/pages/support/TicketHistory'));
const UserAccountManagement = lazy(() => import('@/pages/support/UserAccountManagement'));
const TechnicalSupport = lazy(() => import('@/pages/support/TechnicalSupport'));
const BillingSupport = lazy(() => import('@/pages/support/BillingSupport'));
const FeatureGuidance = lazy(() => import('@/pages/support/FeatureGuidance'));
const LiveChat = lazy(() => import('@/pages/support/LiveChat'));
const EmailSupport = lazy(() => import('@/pages/support/EmailSupport'));
const PhoneSupport = lazy(() => import('@/pages/support/PhoneSupport'));
const ScreenSharing = lazy(() => import('@/pages/support/ScreenSharing'));
const SupportArticles = lazy(() => import('@/pages/support/SupportArticles'));
const FAQManagement = lazy(() => import('@/pages/support/FAQManagement'));
const SolutionDatabase = lazy(() => import('@/pages/support/SolutionDatabase'));
const TrainingMaterials = lazy(() => import('@/pages/support/TrainingMaterials'));
const SupportMetrics = lazy(() => import('@/pages/support/SupportMetrics'));
const ResponseTimes = lazy(() => import('@/pages/support/ResponseTimes'));
const ResolutionRates = lazy(() => import('@/pages/support/ResolutionRates'));
const CustomerSatisfaction = lazy(() => import('@/pages/support/CustomerSatisfaction'));

// Mobile Pages
const MobileDashboard = lazy(() => import('@/pages/mobile/MobileDashboard'));
const QuickActions = lazy(() => import('@/pages/mobile/QuickActions'));
const CameraIntegration = lazy(() => import('@/pages/mobile/CameraIntegration'));
const PushNotifications = lazy(() => import('@/pages/mobile/PushNotifications'));
const OfflineMode = lazy(() => import('@/pages/mobile/OfflineMode'));
const AppSettings = lazy(() => import('@/pages/mobile/AppSettings'));

const AppRoutes = () => {
    const { isLoading } = useAuth();

    if (isLoading) {
        return <LoadingSpinner fullScreen />;
    }
    return (
        <Suspense fallback={<LoadingSpinner fullScreen />}>
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register-success" element={<RegisterSuccess />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />
                <Route path="/verify-email/:token" element={<EmailVerification />} />
                <Route path="/two-factor-auth" element={<TwoFactorAuth />} />

                {/* Error Routes */}
                <Route path="/403" element={<Forbidden />} />
                <Route path="/500" element={<ServerError />} />
                <Route path="/maintenance" element={<Maintenance />} />

                {/* MOTHER ROLE ROUTES */}
                <Route path="/mother/*" element={
                    <ProtectedRoute allowedRoles={['Mother']}>
                        {/* <MotherLayout /> */}
                        <MasterLayout />
                    </ProtectedRoute>
                }>
                    {/* Dashboard */}
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<MotherDashboard />} />
                    <Route path="today" element={<TodaySummary />} />
                    <Route path="weekly" element={<WeeklyOverview />} />

                    {/* Baby Management */}
                    <Route path="babies" element={<BabyList />} />
                    <Route path="babies/add" element={<AddBaby />} />
                    <Route path="babies/:babyId" element={<BabyProfile />} />
                    <Route path="babies/:babyId/edit" element={<EditBaby />} />
                    <Route path="babies/:babyId/dashboard" element={<BabyDashboard />} />
                    <Route path="babies/:babyId/growth" element={<GrowthRecords />} />
                    <Route path="babies/:babyId/growth/charts" element={<GrowthCharts />} />
                    <Route path="babies/:babyId/milestones" element={<MilestonesTracker />} />
                    <Route path="babies/:babyId/milestones/:milestoneId" element={<MilestoneDetails />} />
                    <Route path="babies/:babyId/photos" element={<BabyPhotoDiary />} />
                    <Route path="babies/:babyId/photos/add" element={<AddPhotos />} />
                    <Route path="babies/:babyId/language" element={<LanguageDevelopment />} />
                    <Route path="babies/:babyId/mood" element={<MoodPatterns />} />

                    {/* Daily Logging */}
                    <Route path="logs" element={<DailyLog />} />
                    <Route path="logs/feeding" element={<FeedingLog />} />
                    <Route path="logs/feeding/add" element={<AddFeedingEntry />} />
                    <Route path="logs/sleep" element={<SleepLog />} />
                    <Route path="logs/diaper" element={<DiaperLog />} />
                    <Route path="logs/activities" element={<ActivityLog />} />
                    <Route path="logs/activities/add" element={<AddActivity />} />

                    {/* Health & Medical */}
                    <Route path="health/vaccinations" element={<VaccinationRecords />} />
                    <Route path="health/vaccinations/schedule" element={<VaccinationSchedule />} />
                    <Route path="health/vaccinations/add" element={<AddVaccination />} />
                    <Route path="health/records" element={<MHealthRecords />} />
                    <Route path="health/appointments" element={<Appointments />} />
                    <Route path="health/appointments/book" element={<BookAppointment />} />
                    <Route path="health/doctors" element={<DoctorProfiles />} />
                    <Route path="health/doctors/:doctorId" element={<DoctorDetails />} />
                    <Route path="health/emergency-contacts" element={<MEmergencyContacts />} />
                    <Route path="health/providers" element={<HealthProviders />} />

                    {/* Maternal Wellness */}
                    <Route path="wellness/health" element={<MaternalHealth />} />
                    <Route path="wellness/postpartum" element={<PostpartumRecovery />} />
                    <Route path="wellness/mental-health" element={<MentalHealth />} />
                    <Route path="wellness/self-care" element={<SelfCareActivities />} />
                    <Route path="wellness/exercise" element={<ExercisePrograms />} />
                    <Route path="wellness/exercise/log" element={<ExerciseLog />} />
                    <Route path="wellness/nutrition" element={<NutritionTracking />} />
                    <Route path="wellness/work-life-balance" element={<WorkLifeBalance />} />

                    {/* Learning & Development */}
                    <Route path="learning/content" element={<EducationalContent />} />
                    <Route path="learning/content/:contentId" element={<ContentDetails />} />
                    <Route path="learning/traditions" element={<MTraditionalPractices />} />
                    <Route path="learning/recipes" element={<Recipes />} />
                    <Route path="learning/recipes/:recipeId" element={<RecipeDetails />} />
                    <Route path="learning/games" element={<DevelopmentalGames />} />
                    <Route path="learning/games/:gameId" element={<GameDetails />} />
                    <Route path="learning/massage" element={<BabyMassage />} />
                    <Route path="learning/seasonal" element={<SeasonalGuidelines />} />
                    <Route path="learning/lullabies" element={<LocalLullabies />} />

                    {/* Community & Social */}
                    <Route path="community/forums" element={<Forums />} />
                    <Route path="community/forums/:forumId" element={<ForumPosts />} />
                    <Route path="community/forums/:forumId/posts/:postId" element={<PostDetails />} />
                    <Route path="community/forums/:forumId/create-post" element={<CreatePost />} />
                    <Route path="community/chat" element={<ChatGroups />} />
                    <Route path="community/chat/:groupId" element={<ChatRoom />} />
                    <Route path="community/events" element={<LocalEvents />} />
                    <Route path="community/events/:eventId" element={<EventDetails />} />
                    <Route path="community/support" element={<SupportNetwork />} />
                    <Route path="community/stories" element={<MStories />} />
                    <Route path="community/stories/:storyId" element={<StoryDetails />} />

                    {/* Tools & Resources */}
                    <Route path="tools/memory-book" element={<MemoryBook />} />
                    <Route path="tools/memory-book/create" element={<CreateMemory />} />
                    <Route path="tools/memory-book/:memoryId" element={<MemoryDetails />} />
                    <Route path="tools/pregnancy-journal" element={<PregnancyJournal />} />
                    <Route path="tools/pregnancy-journal/entry" element={<JournalEntry />} />
                    <Route path="tools/reminders" element={<Reminders />} />
                    <Route path="tools/reminders/add" element={<AddReminder />} />
                    <Route path="tools/night-routines" element={<NightRoutines />} />
                    <Route path="tools/emergency-guide" element={<EmergencyGuide />} />

                    {/* Shopping & Products */}
                    <Route path="shop/products" element={<Products />} />
                    <Route path="shop/products/:productId" element={<ProductDetails />} />
                    <Route path="shop/products/:productId/reviews" element={<MProductReviews />} />
                    <Route path="shop/partners" element={<PartnerListings />} />
                    <Route path="shop/partners/:partnerId" element={<PartnerDetails />} />
                    <Route path="shop/cart" element={<ShoppingCart />} />
                    <Route path="shop/orders" element={<MOrderHistory />} />
                    <Route path="shop/wishlist" element={<Wishlist />} />

                    {/* Rewards & Gamification */}
                    <Route path="rewards" element={<RewardsDashboard />} />
                    <Route path="rewards/available" element={<AvailableRewards />} />
                    <Route path="rewards/:rewardId" element={<RewardDetails />} />
                    <Route path="rewards/history" element={<RedemptionHistory />} />
                    <Route path="rewards/challenges" element={<ActivityChallenges />} />
                    <Route path="rewards/achievements" element={<Achievements />} />
                    <Route path="rewards/leaderboard" element={<Leaderboard />} />

                    {/* Profile & Settings */}
                    <Route path="profile" element={<ProfileView />} />
                    <Route path="profile/edit" element={<ProfileEdit />} />
                    <Route path="settings" element={<AccountSettings />} />
                    <Route path="settings/privacy" element={<PrivacySettings />} />
                    <Route path="settings/notifications" element={<NotificationSettings />} />
                    <Route path="settings/password" element={<PasswordChange />} />

                    <Route path="*" element={<NotFound />} />
                </Route>

                {/* ADMIN ROLE ROUTES */}
                <Route path="/admin/*" element={
                    <ProtectedRoute allowedRoles={['Admin']}>
                        {/* <AdminLayout /> */}
                        <MasterLayout />
                    </ProtectedRoute>
                }>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="system-health" element={<SystemHealth />} />
                    <Route path="analytics" element={<RealTimeAnalytics />} />

                    {/* User Management */}
<<<<<<< HEAD
                    <Route path="users/all" element={<AllUsers />} />
=======
                    <Route path="users" element={<AllUsers />} />
>>>>>>> 9b2a0e90b03714ff659de574b347f7ef4aaed57e
                    <Route path="users/:userId" element={<UserDetails />} />
                    <Route path="users/:userId/analytics" element={<UserAnalytics />} />
                    <Route path="users/:userId/activity" element={<AUserActivity />} />
                    <Route path="roles" element={<RoleManagement />} />
                    <Route path="bulk-actions" element={<BulkUserActions />} />

                    {/* Content Management */}
                    <Route path="content" element={<AllContent />} />
                    <Route path="content/approval" element={<ContentApproval />} />
                    <Route path="content/analytics" element={<AContentAnalytics />} />
                    <Route path="media" element={<MediaManagement />} />

                    {/* Healthcare Management */}
                    <Route path="healthcare/doctors" element={<DoctorManagement />} />
                    <Route path="healthcare/providers" element={<HealthProviderDirectory />} />
                    <Route path="healthcare/appointments" element={<AppointmentSystem />} />
                    <Route path="healthcare/records" element={<MedicalRecords />} />

                    {/* Partner Management */}
                    <Route path="partners" element={<PartnerDirectory />} />
                    <Route path="partners/applications" element={<PartnerApplications />} />
                    <Route path="partners/:partnerId/performance" element={<PartnerPerformance />} />
                    <Route path="partners/commissions" element={<CommissionManagement />} />

                    {/* System Administration */}
                    <Route path="system/settings" element={<SystemSettings />} />
                    <Route path="system/database" element={<DatabaseManagement />} />
                    <Route path="system/backup" element={<BackupManagement />} />
                    <Route path="system/security" element={<SecuritySettings />} />
                    <Route path="system/api" element={<APIManagement />} />
                    <Route path="system/audit" element={<AuditLogs />} />

                    {/* Analytics & Reports */}
                    <Route path="analytics/system" element={<SystemAnalytics />} />
                    <Route path="analytics/users" element={<AUserReports />} />
                    <Route path="analytics/business" element={<BusinessReports />} />
                    <Route path="analytics/performance" element={<PerformanceReports />} />
                    <Route path="analytics/custom" element={<CustomReports />} />

                    {/* Communication */}
                    <Route path="communication/notifications" element={<NotificationCenter />} />
                    <Route path="communication/messaging" element={<BulkMessaging />} />
                    <Route path="communication/surveys" element={<SurveyManagement />} />
                    <Route path="communication/announcements" element={<AnnouncementSystem />} />

                    {/* Financial Management */}
                    <Route path="finance/revenue" element={<RevenueDashboard />} />
                    <Route path="finance/payments" element={<PaymentManagement />} />
                    <Route path="finance/subscriptions" element={<SubscriptionManagement />} />
                    <Route path="finance/reports" element={<FinancialReports />} />
<<<<<<< HEAD
                    <Route path="*" element={<NotFound />} />
=======
>>>>>>> 9b2a0e90b03714ff659de574b347f7ef4aaed57e
                </Route>

                {/* HEALTH PROVIDER ROLE ROUTES */}
                <Route path="/provider/*" element={
                    <ProtectedRoute allowedRoles={['HealthProvider']}>
                        {/* <HealthProviderLayout /> */}
                        <MasterLayout />
                    </ProtectedRoute>
                }>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<ProviderDashboard />} />
                    <Route path="today" element={<TodaySchedule />} />
                    <Route path="patients/summary" element={<PatientSummary />} />

                    {/* Schedule Management */}
                    <Route path="schedule" element={<CalendarView />} />
                    <Route path="schedule/availability" element={<AvailabilitySettings />} />
                    <Route path="schedule/slots" element={<TimeSlots />} />
                    <Route path="schedule/breaks" element={<BreakTimeManagement />} />
                    <Route path="schedule/history" element={<AppointmentHistory />} />

                    {/* Patient Management */}
                    <Route path="patients" element={<PatientList />} />
                    <Route path="patients/search" element={<PatientSearch />} />
                    <Route path="patients/:patientId" element={<PatientProfile />} />
                    <Route path="patients/:patientId/babies" element={<BabyRecords />} />
                    <Route path="patients/:patientId/maternal" element={<MaternalRecords />} />
                    <Route path="patients/:patientId/history" element={<PatientHistory />} />

                    {/* Medical Records */}
                    <Route path="records/health" element={<HealthRecords />} />
                    <Route path="records/vaccinations" element={<VaccinationManagement />} />
                    <Route path="records/growth" element={<GrowthTracking />} />
                    <Route path="records/notes" element={<MedicalNotes />} />
                    <Route path="records/prescriptions" element={<PrescriptionManagement />} />

                    {/* Appointments */}
                    <Route path="appointments" element={<AppointmentList />} />
                    <Route path="appointments/:appointmentId" element={<AppointmentDetails />} />
                    <Route path="appointments/schedule" element={<ScheduleAppointment />} />
                    <Route path="appointments/:appointmentId/reschedule" element={<RescheduleAppointment />} />
                    <Route path="appointments/:appointmentId/notes" element={<AppointmentNotes />} />

                    {/* Communication */}
                    <Route path="messages" element={<PatientMessages />} />
                    <Route path="counseling" element={<CounselingSessions />} />
                    <Route path="counseling/:sessionId/notes" element={<SessionNotes />} />
                    <Route path="emergency" element={<EmergencyContacts />} />

                    {/* Professional Tools */}
                    <Route path="resources/guidelines" element={<MedicalGuidelines />} />
                    <Route path="resources/clinical" element={<ClinicalResources />} />
                    <Route path="education" element={<ContinuingEducation />} />
                    <Route path="network" element={<PeerNetwork />} />
                </Route>

                {/* PARTNER/VENDOR ROLE ROUTES */}
                <Route path="/partner/*" element={
                    <ProtectedRoute allowedRoles={['Partner']}>
                        {/* <PartnerLayout /> */}
                        <MasterLayout />
                    </ProtectedRoute>
                }>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<PartnerDashboard />} />
                    <Route path="sales" element={<SalesOverview />} />
                    <Route path="performance" element={<PerformanceMetrics />} />
                    <Route path="profile" element={<BusinessProfile />} />

                    {/* Product Management */}
                    <Route path="products" element={<ProductCatalog />} />
                    <Route path="products/add" element={<AddProduct />} />
                    <Route path="products/:productId/edit" element={<EditProduct />} />
                    <Route path="products/:productId/analytics" element={<ProductAnalytics />} />
                    <Route path="inventory" element={<InventoryManagement />} />
                    <Route path="reviews" element={<ProductReviews />} />

                    {/* Order Management */}
                    <Route path="orders" element={<OrderList />} />
                    <Route path="orders/:orderId" element={<OrderDetails />} />
                    <Route path="orders/processing" element={<OrderProcessing />} />
                    <Route path="shipping" element={<ShippingManagement />} />
                    <Route path="orders/history" element={<OrderHistory />} />

                    {/* Customer Management */}
                    <Route path="customers" element={<CustomerList />} />
                    <Route path="customers/:customerId" element={<CustomerProfile />} />
                    <Route path="customers/reviews" element={<CustomerReviews />} />
                    <Route path="customers/communication" element={<CustomerCommunication />} />

                    {/* Analytics & Reports */}
                    <Route path="analytics/sales" element={<SalesReports />} />
                    <Route path="analytics/performance" element={<PerformanceDashboard />} />
                    <Route path="analytics/customers" element={<CustomerAnalytics />} />
                    <Route path="analytics/products" element={<ProductPerformance />} />

                    {/* Business Settings */}
                    <Route path="settings/business" element={<BusinessInformation />} />
                    <Route path="settings/payment" element={<PaymentSettings />} />
                    <Route path="settings/shipping" element={<ShippingSettings />} />
                    <Route path="settings/tax" element={<TaxSettings />} />
                </Route>

                {/* CONTENT CREATOR ROLE ROUTES */}
                <Route path="/creator/*" element={
                    <ProtectedRoute allowedRoles={['ContentCreator']}>
                        {/* <ContentCreatorLayout /> */}
                        <MasterLayout />
                    </ProtectedRoute>
                }>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<CreatorDashboard />} />
                    <Route path="calendar" element={<ContentCalendar />} />
                    <Route path="metrics" element={<CcPerformanceMetrics />} />

                    {/* Content Creation */}
                    <Route path="create" element={<CreateContent />} />
                    <Route path="content/:contentId/edit" element={<EditContent />} />
                    <Route path="library" element={<ContentLibrary />} />
                    <Route path="drafts" element={<DraftManagement />} />
                    <Route path="media" element={<MediaLibrary />} />
                    <Route path="media/upload" element={<UploadMedia />} />

                    {/* Content Types */}
                    <Route path="articles" element={<EducationalArticles />} />
                    <Route path="stories" element={<Stories />} />
                    <Route path="traditions" element={<TraditionalPractices />} />
                    <Route path="audio" element={<AudioContent />} />
                    <Route path="video" element={<VideoContent />} />
                    <Route path="interactive" element={<InteractiveContent />} />

                    {/* Publishing & Distribution */}
                    <Route path="publishing/queue" element={<PublishingQueue />} />
                    <Route path="publishing/review" element={<ContentReview />} />
                    <Route path="publishing/versions" element={<VersionControl />} />
                    <Route path="tags" element={<ContentTags />} />
                    <Route path="seo" element={<SEOSettings />} />

                    {/* Analytics & Engagement */}
                    <Route path="analytics" element={<ContentAnalytics />} />
                    <Route path="audience" element={<AudienceInsights />} />
                    <Route path="feedback" element={<FeedbackManagement />} />
                    <Route path="trends" element={<ContentTrends />} />
                </Route>

                {/* MODERATOR ROLE ROUTES */}
                <Route path="/moderator/*" element={
                    <ProtectedRoute allowedRoles={['Moderator']}>
                        {/* <ModeratorLayout /> */}
                        <MasterLayout />
                    </ProtectedRoute>
                }>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<ModerationDashboard />} />
                    <Route path="queue" element={<ModerationQueue />} />
                    <Route path="community-health" element={<CommunityHealth />} />

                    {/* Content Moderation */}
                    <Route path="content/flagged" element={<FlaggedContent />} />
                    <Route path="content/:contentId/review" element={<MoContentReview />} />
                    <Route path="content/approved" element={<ApprovedContent />} />
                    <Route path="content/rejected" element={<RejectedContent />} />
                    <Route path="content/bulk" element={<BulkModeration />} />

                    {/* User Management */}
                    <Route path="users/reports" element={<UserReports />} />
                    <Route path="users/:userId/review" element={<UserProfileReview />} />
                    <Route path="users/sanctions" element={<UserSanctions />} />
                    <Route path="users/:userId/communication" element={<UserCommunication />} />

                    {/* Forum Management */}
                    <Route path="forums" element={<ForumOverview />} />
                    <Route path="forums/categories" element={<ForumCategories />} />
                    <Route path="forums/posts" element={<PostManagement />} />
                    <Route path="forums/comments" element={<CommentManagement />} />
                    <Route path="forums/threads" element={<ThreadManagement />} />

                    {/* Community Analytics */}
                    <Route path="analytics/moderation" element={<ModerationReports />} />
                    <Route path="analytics/users" element={<UserActivity />} />
                    <Route path="analytics/content" element={<MoContentTrends />} />
                    <Route path="analytics/growth" element={<CommunityGrowth />} />

                    {/* Moderation Tools */}
                    <Route path="tools/auto-moderation" element={<AutoModerationRules />} />
                    <Route path="tools/filters" element={<KeywordFilters />} />
                    <Route path="tools/escalation" element={<EscalationManagement />} />
                    <Route path="tools/guidelines" element={<ModerationGuidelines />} />
                </Route>

                {/* EXPERT ROLE ROUTES */}
                <Route path="/expert/*" element={
                    <ProtectedRoute allowedRoles={['Expert']}>
                        {/* <ExpertLayout /> */}
                        <MasterLayout />
                    </ProtectedRoute>
                }>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<ExpertDashboard />} />
                    <Route path="requests" element={<ConsultationRequests />} />
                    <Route path="impact" element={<KnowledgeImpact />} />

                    {/* Consultation Management */}
                    <Route path="consultations/schedule" element={<ConsultationSchedule />} />
                    <Route path="consultations/active" element={<ActiveConsultations />} />
                    <Route path="consultations/history" element={<ConsultationHistory />} />
                    <Route path="consultations/:consultationId/notes" element={<ESessionNotes />} />
                    <Route path="consultations/follow-up" element={<FollowUpManagement />} />

                    {/* Knowledge Sharing */}
                    <Route path="knowledge" element={<KnowledgeBase />} />
                    <Route path="knowledge/create" element={<CreateArticle />} />
                    <Route path="qa" element={<QAManagement />} />
                    <Route path="webinars" element={<ExpertWebinars />} />
                    <Route path="workshops" element={<WorkshopManagement />} />

                    {/* Professional Network */}
                    <Route path="community" element={<ExpertCommunity />} />
                    <Route path="collaboration" element={<PeerCollaboration />} />
                    <Route path="forums" element={<ExpertForums />} />
                    <Route path="mentorship" element={<MentorshipProgram />} />

                    {/* Impact & Analytics */}
                    <Route path="analytics/consultations" element={<ConsultationMetrics />} />
                    <Route path="analytics/knowledge" element={<KnowledgeAnalytics />} />
                    <Route path="feedback" element={<UserFeedback />} />
                    <Route path="growth" element={<ProfessionalGrowth />} />
                </Route>

                {/* SUPPORT STAFF ROLE ROUTES */}
                <Route path="/support/*" element={
                    <ProtectedRoute allowedRoles={['SupportStaff']}>
                        {/* <SupportStaffLayout /> */}
                        <MasterLayout />
                    </ProtectedRoute>
                }>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<SupportDashboard />} />
                    <Route path="queue" element={<TicketQueue />} />
                    <Route path="team" element={<TeamPerformance />} />

                    {/* Ticket Management */}
                    <Route path="tickets" element={<AllTickets />} />
                    <Route path="tickets/:ticketId" element={<TicketDetails />} />
                    <Route path="tickets/create" element={<CreateTicket />} />
                    <Route path="tickets/:ticketId/assign" element={<TicketAssignment />} />
                    <Route path="tickets/:ticketId/history" element={<TicketHistory />} />

                    {/* User Support */}
                    <Route path="users/accounts" element={<UserAccountManagement />} />
                    <Route path="users/technical" element={<TechnicalSupport />} />
                    <Route path="users/billing" element={<BillingSupport />} />
                    <Route path="users/features" element={<FeatureGuidance />} />

                    {/* Communication Tools */}
                    <Route path="chat" element={<LiveChat />} />
                    <Route path="email" element={<EmailSupport />} />
                    <Route path="phone" element={<PhoneSupport />} />
                    <Route path="screen-share" element={<ScreenSharing />} />

                    {/* Knowledge Management */}
                    <Route path="articles" element={<SupportArticles />} />
                    <Route path="faq" element={<FAQManagement />} />
                    <Route path="solutions" element={<SolutionDatabase />} />
                    <Route path="training" element={<TrainingMaterials />} />

                    {/* Analytics & Reports */}
                    <Route path="analytics/metrics" element={<SupportMetrics />} />
                    <Route path="analytics/response-times" element={<ResponseTimes />} />
                    <Route path="analytics/resolution" element={<ResolutionRates />} />
                    <Route path="analytics/satisfaction" element={<CustomerSatisfaction />} />
                </Route>

                {/* Mobile Routes */}
                <Route path="/mobile/*" element={
                    <ProtectedRoute>
                        {/* <MobileLayout /> */}
                        <MasterLayout />
                    </ProtectedRoute>
                }>
                    <Route path="dashboard" element={<MobileDashboard />} />
                    <Route path="quick-actions" element={<QuickActions />} />
                    <Route path="camera" element={<CameraIntegration />} />
                    <Route path="notifications" element={<PushNotifications />} />
                    <Route path="offline" element={<OfflineMode />} />
                    <Route path="settings" element={<AppSettings />} />
                </Route>

                {/* Default redirect based on user role */}
                <Route path="/" element={<RoleBasedRedirect />} />

                {/* Catch all - 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};
export default AppRoutes;
const RoleBasedRedirect = () => {
    const { user, isLoading, isInitialized } = useAuth();
    const location = useLocation();

    if (isLoading || !isInitialized) {
        return <LoadingSpinner fullScreen />;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    const roleRedirects = {
        'Mother': '/mother/dashboard',
        'Admin': '/admin/dashboard',
        'HealthProvider': '/provider/dashboard',
        'Partner': '/partner/dashboard',
        'ContentCreator': '/creator/dashboard',
        'Moderator': '/moderator/dashboard',
        'Expert': '/expert/dashboard',
        'SupportStaff': '/support/dashboard'
    };

    return <Navigate to={roleRedirects[user.role] || '/403'} replace />;
};
