import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil'

import moment from 'moment';

const timeState = atom({
    key: 'time',
    default: moment(),
})

const remaingDayState = selector({
    key: 'remaingDay',
    get: ({get}) => {
        if(get(timeState).day() === 6 || get(timeState).day() === 0) {
            return '오늘은 주말입니다'
        } else {
            return `토요일까지 D-${6 - get(timeState).day()}일`
        }
    }
})

const nowDateState = selector({
    key: 'nowDate',
    get: ({get}) => {
        return get(timeState).format('YYYYMMDD')
    }
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

const aboutMeModalState = atom({
    key: 'aboutMeModal',
    default: false,
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
    aboutMeModalState,
}