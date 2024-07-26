insert into Medico (id, nome, crm) values (1, "Eduardo Costa", 123);
insert into Medico (id, nome, crm) values (2, "Leonardo", 456);

insert into Paciente (id, nome, cpf) values (1, "Luan Santana", "000.000.000-00");
insert into Paciente (id, nome, cpf) values (1, "Gustavo Lima", "111.111.111-11");

insert into Horario values (1, 1, NOW(), NOW(), NOW());
insert into Horario values (2, 1, NOW(), NOW(), NOW());
insert into Horario values (3, 1, NOW(), NOW(), NOW());
insert into Horario values (4, 2, NOW(), NOW(), NOW());
insert into Horario values (5, 2, NOW(), NOW(), NOW());
insert into Horario values (6, 2, NOW(), NOW(), NOW());

insert into Agendamento values (1, 6, 1, "Aguardando Aprovação", "", NOW(), NOW());
insert into Agendamento values (2, 1, 1, "Confirmado", "meet.google.com/111-222-111", NOW(), NOW());
insert into Agendamento values (4, 2, 2, "Aguardando Pagamento", "", NOW(), NOW());
insert into Agendamento values (6, 3, 2, "Concluído", "meet.google.com/888-999-888", NOW(), NOW());
