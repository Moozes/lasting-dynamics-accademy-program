import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { User } from "firebase/auth";
import { useAtomValue } from "jotai";

import { featureFlagsAtom } from "@atoms/index";
import { AuthenticatedUserRoutes, RedirectAndKeepSearchParams } from "@components/index";
import { DashboardLayout } from "@features/dashboard/index";
import { RAMPSubRoutesEnum } from "@features/RAMP/index";
import { REBASubRoutesEnum } from "@features/REBA/index";
import { RULASubRoutesEnum } from "@features/RULA/index";
import {
    MultiSessionDetailsSubRoutesEnum,
    MultiSessionHeartRateDataPage,
    MultiSessionTableOfResultsPage,
    MultiSessionTemperaturePage,
    MultiSessionTnoResultsPage,
} from "@features/sessions/index";
import AssessmentsPage from "@pages/dashboard/AssessmentsPage";
import CategoryAndLabelsPage from "@pages/dashboard/CategoryAndLabelsPage";
import GeneratedRAMPResultsPage from "@pages/dashboard/GeneratedRAMPResultsPage";
import HomePage from "@pages/dashboard/HomePage";
import MECResultsPage from "@pages/dashboard/MECResultsPage";
import MultiMECResultsPage from "@pages/dashboard/MultiMECResultsPage";
import MultiRAMPResultsPage from "@pages/dashboard/MultiRAMPResultsPage";
import MultiREBAResultsPage from "@pages/dashboard/MultiREBAResultsPage";
import MultiRULAResultsPage from "@pages/dashboard/MultiRULAResultsPage";
import MultiSessionDetailsPage from "@pages/dashboard/MultiSessionDetailsPage";
import RAMPDetailPage from "@pages/dashboard/RAMPDetailPage";
import RAMPResultsPage from "@pages/dashboard/RAMPResultsPage";
import REBADetailPage from "@pages/dashboard/REBADetailPage";
import REBAResultsPage from "@pages/dashboard/REBAResultsPage";
import RULADetailPage from "@pages/dashboard/RULADetailPage";
import RULAResultsPage from "@pages/dashboard/RULAResultsPage";
import SessionDetailsPage from "@pages/dashboard/SessionDetailsPage";
import SessionsPage from "@pages/dashboard/SessionsPage";
import TestingNewComponentsPage from "@pages/dashboard/TestingNewComponentsPage";
import UsersPage from "@pages/dashboard/UsersPage";
import WorkCyclesPage from "@pages/dashboard/WorkCyclesPage";
import WorkProfilesPage from "@pages/dashboard/WorkProfilesPage";
import NotFound from "@pages/NotFound";

import routes from "./routes";

// lazy laoded
const RAMPDetailsSubRoutes = lazy(() => import("./RAMPDetailsSubRoutes"));
const RULADetailsSubRoutes = lazy(() => import("./RULADetailsSubRoutes"));
const REBADetailsSubRoutes = lazy(() => import("./REBADetailsSubRoutes"));
const IconsPage = lazy(() => import("@pages/dashboard/IconsPage"));

type Props = {
    user: User | null;
};

const DashboardSubRoutes = ({ user }: Props) => {
    const featureFlags = useAtomValue(featureFlagsAtom);
    return (
        <Routes>
            <Route element={<AuthenticatedUserRoutes user={user} />}>
                <Route path={routes.root} element={<Navigate to={routes.dashboard.home} replace />} />

                <Route element={<DashboardLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="users" element={<UsersPage />} />
                    <Route path="work-profiles" element={<WorkProfilesPage />} />

                    <Route path="sessions" element={<SessionsPage />} />
                    <Route path="sessions/:sessionId/details" element={<SessionDetailsPage />} />
                    <Route path="sessions/details" element={<MultiSessionDetailsPage />}>
                        <Route
                            index
                            element={
                                <RedirectAndKeepSearchParams
                                    to={MultiSessionDetailsSubRoutesEnum.tableOfResults}
                                    replace
                                />
                            }
                        />
                        <Route
                            path={MultiSessionDetailsSubRoutesEnum.tableOfResults}
                            element={<MultiSessionTableOfResultsPage />}
                        />
                        <Route
                            path={MultiSessionDetailsSubRoutesEnum.TNOResults}
                            element={<MultiSessionTnoResultsPage />}
                        />
                        <Route
                            path={MultiSessionDetailsSubRoutesEnum.heartRateData}
                            element={<MultiSessionHeartRateDataPage />}
                        />
                        <Route
                            path={MultiSessionDetailsSubRoutesEnum.temperature}
                            element={<MultiSessionTemperaturePage />}
                        />
                    </Route>

                    <Route path="assessments" element={<AssessmentsPage />} />
                    <Route path="ramp-assessments/:id" element={<RAMPDetailPage />}>
                        <Route index element={<Navigate to={RAMPSubRoutesEnum.postures} replace />} />
                        <Route path="*" element={<RAMPDetailsSubRoutes />} />
                    </Route>
                    <Route path="ramp-assessments/:id/results" element={<RAMPResultsPage />} />
                    <Route path="ramp-assessments/:id/continue" element={<GeneratedRAMPResultsPage />} />
                    <Route path="ramp-assessments/results" element={<MultiRAMPResultsPage />} />

                    <Route path="rula-assessments/:id" element={<RULADetailPage />}>
                        <Route index element={<Navigate to={RULASubRoutesEnum.right} replace />} />
                        <Route path="*" element={<RULADetailsSubRoutes />} />
                    </Route>
                    <Route path="rula-assessments/:id/results" element={<RULAResultsPage />} />
                    <Route path="rula-assessments/results" element={<MultiRULAResultsPage />} />

                    <Route path="reba-assessments/:id" element={<REBADetailPage />}>
                        <Route index element={<Navigate to={REBASubRoutesEnum.neckTrunkandLegAnalysis} replace />} />
                        <Route path="*" element={<REBADetailsSubRoutes />} />
                    </Route>
                    <Route path="reba-assessments/:id/results" element={<REBAResultsPage />} />
                    <Route path="reba-assessments/results" element={<MultiREBAResultsPage />} />
                    <Route path="mec-assessments/:id/results" element={<MECResultsPage />} />
                    <Route path="category-and-labels" element={<CategoryAndLabelsPage />} />
                    <Route path="workcycles" element={<WorkCyclesPage />} />
                    <Route path="mec-assessments/results" element={<MultiMECResultsPage />} />
                    {featureFlags.enable_TestingNewComponentsPage && (
                        <Route path="test" element={<TestingNewComponentsPage />} />
                    )}
                    {featureFlags.enable_IconsPage && <Route path="icons" element={<IconsPage />} />}
                </Route>
                <Route path={routes.rest} element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default DashboardSubRoutes;
