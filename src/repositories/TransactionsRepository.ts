import Appointment from '../models/Appointement';

interface CreateAppointmentDTO {}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public create({}: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({});

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
