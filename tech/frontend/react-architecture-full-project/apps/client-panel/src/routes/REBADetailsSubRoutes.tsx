import { Route, Routes } from "react-router-dom";

import { ArmAndWristAnalysis, NeckTrunkandLegAnalysis, REBASubRoutesEnum } from "@features/REBA/index";
import NotFound from "@pages/NotFound";

import routes from "./routes";

const REBADetailsSubRoutes = () => {
    return (
        <Routes>
            <Route path={REBASubRoutesEnum.neckTrunkandLegAnalysis} element={<NeckTrunkandLegAnalysis />} />
            <Route path={REBASubRoutesEnum.armAndWristAnalysis} element={<ArmAndWristAnalysis />} />
            <Route path={routes.rest} element={<NotFound />} />
        </Routes>
    );
};

export default REBADetailsSubRoutes;
