export interface TimerState {
    minutes: number
    seconds: number
  }
  
  export enum PomodoroMode {
    BREAK = 'BREAK',
    FOCUS = 'FOCUS',
    HOME = 'HOME'
  }
  
  export interface Log {
    mode: PomodoroMode
    time: number
    createdAt: Date
    startTime: Date | null
  }
  
  export interface StoreState {
    startTime: Date | null
    logs: any
    mode: 'focus' | 'break' | 'home'
    setMode: (mode: 'focus' | 'break') => void
  
    initialFocusTime: TimerState
    setInitialFocusTime: (time: TimerState) => void
  
    initialBreakTime: TimerState
    setInitialBreakTime: (time: TimerState) => void
  
    focusTime: TimerState
    setFocusTime: (time: TimerState) => void
    isFocusCompleted: boolean
  
    breakTime: TimerState
    setBreakTime: (time: TimerState) => void
    isBreakCompleted: boolean
  
    overtime: TimerState
    setOvertime: (time: TimerState) => void
    isOvertimeRunning: boolean
  
    isTimerPaused: boolean
    isTimerRunning: boolean
    timerInterval: NodeJS.Timeout | null
  
    startTimer: () => void
    pauseTimer: () => void
    stopOvertime: () => void
    cancelActiveMode: () => void
    returnToHomeScreen: (newMode: 'focus' | 'break') => void
    startOvertime: () => void
    saveLog: (log: Log) => void
    addFakeLogs: () => void
  }
  
  export interface StyledButtonProps {
    show: boolean
  }