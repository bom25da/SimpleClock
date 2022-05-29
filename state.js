import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil'

import moment from 'moment';

const remaingDayState = atom({
    key: 'remaingDay',
    default: 6-moment().day(),
})

const timeState = atom({
    key: 'time',
    default: moment(),
})

const nowDateState = atom({
    key: 'nowDate',
    default: moment().format('YYYYMMDD'),
})

const isLoadingState = atom({
    key: 'isLoading',
    default: true,
})

const thisWetState = atom({
    key: 'thisWet',
    default: '',
})

const lastWetState = atom({
    key: 'lastWet',
    default: '',
})

const isAnalectsState = atom({
    key: 'isAnalects',
    default: true,
})

const isDdayState = atom({
    key: 'isDday',
    default: true,
})

const clockModalState = atom({
    key: 'clockModal',
    default: false,
})

const clockCodeState = atom({
    key: 'clockCode',
    default: 'digital',
})

const fontModalState = atom({
    key: 'fontModal',
    default: false,
})

const fontCodeState = atom({
    key: 'fontCode',
    default: 'dotum',
})

export {
    remaingDayState,
    nowDateState,
    timeState, 
    isLoadingState, 
    thisWetState, 
    lastWetState,
    isAnalectsState,
    isDdayState,
    clockModalState,
    clockCodeState,
    fontModalState,
    fontCodeState,
}