import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { IProduct } from "../../models/type"

const intialState = {
    products: [],
    isLoading: false
} as { films: IProduct[], isLoading: boolean }