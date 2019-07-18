import * as React from 'react';
import { getCalendar } from './utils';
import { DatePicker } from './Datepicker';
import { DayModel } from '../models/DayModel';
import * as PropTypes from 'prop-types';

interface Props {
    placeholder?: string;
    setValue?: Function;
    resetCalendar?: boolean;
    error?: boolean;
}

interface State {
    days: DayModel[];
    showCalendar?: boolean;
    selected?: number;
}

export class DatePickerContainer extends React.Component<Props, State> {
    refCalendar;
    placeholder = this.props.placeholder;
    year = new Date().getFullYear();
    month = new Date().getMonth();
    
    static propTypes =  {
        placeholder: PropTypes.string,
        setValue: PropTypes.func,
        resetCalendar: PropTypes.bool
    };

    state = {
        showCalendar: false,
        days: getCalendar(this.year, this.month),
        selected: new Date().getDate()
    };

    componentDidUpdate(prevProps: Props) {
        if (prevProps.resetCalendar !== this.props.resetCalendar) {
            this.placeholder = this.props.placeholder;
            this.setState({
                days: getCalendar(new Date().getFullYear(), new Date().getMonth()),
                selected: new Date().getDate()
            });
            this.month = new Date().getMonth();
            this.year = new Date().getFullYear();
        };
    };

    handleClickDay = (day: DayModel) => {
        this.placeholder = null;
        this.setState({
            selected: day.dayMonth || day.anotherMonthDay,
            showCalendar: false
        });
        if (day.position === 'prev') {
            this.handleClickPrevMonth();
        };
        if (day.position === 'next') {
            this.handleClickNextMonth();
        };
        if (this.props.setValue) {
            this.props.setValue(this.handleDayForInput(day.anotherMonthDay || day.dayMonth));
        };
    };

    handleClickPrevMonth = () => {
        if (this.month === 0) {
            this.month = 11;
            this.year -= 1;
        } else {
            this.month -= 1;
        }
        this.setState({
            days: getCalendar(this.year, this.month)
        });
    };

    handleClickNextMonth = () => {
        if (this.month === 11) {
            this.month = 0;
            this.year += 1;
        } else {
            this.month += 1;
        }
        this.setState({
            days: getCalendar(this.year, this.month)
        });
    };

    handleDayForInput = (day: number): string => {
        const month = ('0' + (this.month + 1)).slice(-2);
        const date = ('0' + (day)).slice(-2);
        return `${date}/${month}/${this.year}`;
    }

    handleShowCalendar = () => {
        this.setState(prevState => ({showCalendar: !prevState.showCalendar}));
        document.addEventListener('click', this.handlecloseCalendar);
    };
    
    handlecloseCalendar = (e) => {
        if (!this.refCalendar.contains(e.target)) {
            this.setState({showCalendar: false});
            document.removeEventListener('click', this.handlecloseCalendar);
        }
    };

    render(): JSX.Element {
        const propsCalendar = {
            month: this.month,
            year: this.year,
            days: this.state.days,
            handleClickDay: this.handleClickDay,
            handleClickPrevMonth: this.handleClickPrevMonth,
            handleClickNextMonth: this.handleClickNextMonth,
            handleShowCalendar: this.handleShowCalendar,
            showCalendar: this.state.showCalendar,
            selected: this.state.selected,
            placeholder: this.placeholder,
            handleDayForInput: this.handleDayForInput,
            error: this.props.error
        };

        return (
            <DatePicker {...propsCalendar} handleRef= {ref => {this.refCalendar = ref}} />
        );
    }
}