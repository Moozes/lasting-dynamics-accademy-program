import { Route, Routes } from "react-router-dom";

import {
    InfluencingFactorsForm,
    LiftingWorkForm,
    MovementsAndRepetitionForm,
    PerceivedPhysicalDiscomfortForm,
    PosturesForm,
    PushingAndPullingForm,
    RAMPSubRoutesEnum,
    StrenuousWorkForm,
} from "@features/RAMP/index";
import NotFound from "@pages/NotFound";

import routes from "./routes";

const RAMPDetailsSubRoutes = () => {
    return (
        <Routes>
            <Route path={RAMPSubRoutesEnum.postures} element={<PosturesForm />} />
            <Route path={RAMPSubRoutesEnum.movementsAndRepetition} element={<MovementsAndRepetitionForm />} />
            <Route path={RAMPSubRoutesEnum.liftingWork} element={<LiftingWorkForm />} />
            <Route path={RAMPSubRoutesEnum.pushingAndPulling} element={<PushingAndPullingForm />} />
            <Route path={RAMPSubRoutesEnum.influencingFactors} element={<InfluencingFactorsForm />} />
            <Route path={RAMPSubRoutesEnum.strenuousWork} element={<StrenuousWorkForm />} />
            <Route path={RAMPSubRoutesEnum.perceivedPhysicalDiscomfort} element={<PerceivedPhysicalDiscomfortForm />} />
            <Route path={routes.rest} element={<NotFound />} />
        </Routes>
    );
};

export default RAMPDetailsSubRoutes;
