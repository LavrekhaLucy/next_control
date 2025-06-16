'use client'

import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/components/store/store";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();