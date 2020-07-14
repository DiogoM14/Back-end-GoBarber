import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppointementsRepository from '../repositories/AppointementsRepository';
import Appointment from '../models/Appointement';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ date, provider }: Request): Promise<Appointment> {
    const appointementsRepository = getCustomRepository(
      AppointementsRepository,
    );

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointementsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = appointementsRepository.create({
      provider,
      date: appointmentDate,
    });

    await appointementsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
