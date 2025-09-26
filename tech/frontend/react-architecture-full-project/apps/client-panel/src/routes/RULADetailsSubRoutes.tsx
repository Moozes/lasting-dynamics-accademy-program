import { Route, Routes } from "react-router-dom";

import { HeadTrunkAndLegs, LeftSide, RightSide, RULASubRoutesEnum } from "@features/RULA/index";
import NotFound from "@pages/NotFound";

import routes from "./routes";

const RULADetailsSubRoutes = () => {
    return (
        <Routes>
            <Route path={RULASubRoutesEnum.left} element={<LeftSide />} />
            <Route path={RULASubRoutesEnum.right} element={<RightSide />} />
            <Route path={RULASubRoutesEnum.neckTrunkAndLegs} element={<HeadTrunkAndLegs />} />
            <Route path={routes.rest} element={<NotFound />} />
        </Routes>
    );
};

export default RULADetailsSubRoutes;
