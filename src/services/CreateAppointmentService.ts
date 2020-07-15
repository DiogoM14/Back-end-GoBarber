import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import AppointementsRepository from '../repositories/AppointementsRepository';
import Appointment from '../models/Appointement';

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ date, provider_id }: Request): Promise<Appointment> {
    const appointementsRepository = getCustomRepository(
      AppointementsRepository,
    );

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointementsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = appointementsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await appointementsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
