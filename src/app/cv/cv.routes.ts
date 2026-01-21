import { CvComponent } from "./cv-component/cv-component";
import { DetailsCvComponent } from "./details-cv/details-cv.component";

export const CV_ROUTES = [
    {path: 'cv', component: CvComponent},
    {path: 'cv/:id', component: DetailsCvComponent},
]
