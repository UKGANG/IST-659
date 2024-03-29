
SET IDENTITY_INSERT IST659_M002_jjian03.dbo.court_location ON;
INSERT INTO IST659_M002_jjian03.dbo.court_location (court_location_id, court_location_name) VALUES (1, 'MindSpa Room');
INSERT INTO IST659_M002_jjian03.dbo.court_location (court_location_id, court_location_name) VALUES (2, 'Lactation Room');
SET IDENTITY_INSERT IST659_M002_jjian03.dbo.court_location OFF;


SET IDENTITY_INSERT IST659_M002_jjian03.dbo.court ON;
INSERT INTO IST659_M002_jjian03.dbo.court (court_id, court_location_id, court_name) VALUES (1, 1, 'Massage Chair');
INSERT INTO IST659_M002_jjian03.dbo.court (court_id, court_location_id, court_name) VALUES (2, 1, 'Racquetball');
INSERT INTO IST659_M002_jjian03.dbo.court (court_id, court_location_id, court_name) VALUES (3, 2, 'Complex');
INSERT INTO IST659_M002_jjian03.dbo.court (court_id, court_location_id, court_name) VALUES (4, 2, 'MindSpa Room');
SET IDENTITY_INSERT IST659_M002_jjian03.dbo.court OFF;


SET IDENTITY_INSERT IST659_M002_jjian03.dbo.activity_type ON;
INSERT INTO IST659_M002_jjian03.dbo.activity_type (activity_type_id, activity_name, maximum_participant) VALUES (1, 'Basketball', 10);
INSERT INTO IST659_M002_jjian03.dbo.activity_type (activity_type_id, activity_name, maximum_participant) VALUES (2, 'Badminton', 4);
INSERT INTO IST659_M002_jjian03.dbo.activity_type (activity_type_id, activity_name, maximum_participant) VALUES (3, 'Yoga', 30);
INSERT INTO IST659_M002_jjian03.dbo.activity_type (activity_type_id, activity_name, maximum_participant) VALUES (4, 'Squash', 2);
INSERT INTO IST659_M002_jjian03.dbo.activity_type (activity_type_id, activity_name, maximum_participant) VALUES (5, 'Mindspa', 1);
SET IDENTITY_INSERT IST659_M002_jjian03.dbo.activity_type OFF;


INSERT INTO IST659_M002_jjian03.dbo.available_activity (court_id, activity_type_id, created_datetime) VALUES (1, 3, getdate());
INSERT INTO IST659_M002_jjian03.dbo.available_activity (court_id, activity_type_id, created_datetime) VALUES (1, 5, getdate());
INSERT INTO IST659_M002_jjian03.dbo.available_activity (court_id, activity_type_id, created_datetime) VALUES (2, 2, getdate());
INSERT INTO IST659_M002_jjian03.dbo.available_activity (court_id, activity_type_id, created_datetime) VALUES (2, 4, getdate());
INSERT INTO IST659_M002_jjian03.dbo.available_activity (court_id, activity_type_id, created_datetime) VALUES (3, 1, getdate());
INSERT INTO IST659_M002_jjian03.dbo.available_activity (court_id, activity_type_id, created_datetime) VALUES (3, 2, getdate());
INSERT INTO IST659_M002_jjian03.dbo.available_activity (court_id, activity_type_id, created_datetime) VALUES (3, 4, getdate());
INSERT INTO IST659_M002_jjian03.dbo.available_activity (court_id, activity_type_id, created_datetime) VALUES (4, 3, getdate());
INSERT INTO IST659_M002_jjian03.dbo.available_activity (court_id, activity_type_id, created_datetime) VALUES (4, 5, getdate());


SET IDENTITY_INSERT IST659_M002_jjian03.dbo.gear_type ON;
INSERT INTO IST659_M002_jjian03.dbo.gear_type (gear_type_id, gear_name) VALUES (1, 'Basketball');
INSERT INTO IST659_M002_jjian03.dbo.gear_type (gear_type_id, gear_name) VALUES (2, 'Badminton Racket');
INSERT INTO IST659_M002_jjian03.dbo.gear_type (gear_type_id, gear_name) VALUES (3, 'Shuttlecock');
INSERT INTO IST659_M002_jjian03.dbo.gear_type (gear_type_id, gear_name) VALUES (4, 'Badminton Net');
INSERT INTO IST659_M002_jjian03.dbo.gear_type (gear_type_id, gear_name) VALUES (5, 'Yoga Mat');
INSERT INTO IST659_M002_jjian03.dbo.gear_type (gear_type_id, gear_name) VALUES (6, 'Squash Racket');
INSERT INTO IST659_M002_jjian03.dbo.gear_type (gear_type_id, gear_name) VALUES (7, 'Racquetball');
INSERT INTO IST659_M002_jjian03.dbo.gear_type (gear_type_id, gear_name) VALUES (8, 'Pillow');
SET IDENTITY_INSERT IST659_M002_jjian03.dbo.gear_type OFF;


SET IDENTITY_INSERT IST659_M002_jjian03.dbo.gear ON;
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (1, 1, 0, 'Spalding');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (2, 1, 0, 'Spalding');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (3, 1, 0, 'Spalding');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (4, 1, 0, 'Spalding');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (5, 1, 0, 'Spalding');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (6, 2, 0, 'Victor');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (7, 2, 0, 'Victor');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (8, 2, 0, 'Victor');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (9, 2, 0, 'Victor');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (10, 2, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (11, 2, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (12, 2, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (13, 2, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (14, 3, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (15, 3, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (16, 3, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (17, 3, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (18, 3, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (19, 3, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (20, 3, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (21, 3, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (22, 3, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (23, 3, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (24, 3, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (25, 4, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (26, 4, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (27, 4, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (28, 4, 0, 'Yonex');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (29, 5, 0, NULL);
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (30, 5, 0, NULL);
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (31, 5, 0, NULL);
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (32, 5, 0, NULL);
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (33, 6, 0, 'Willson');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (34, 6, 0, 'Willson');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (35, 6, 0, 'Willson');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (36, 6, 0, 'Willson');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (37, 6, 0, 'Willson');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (38, 6, 0, 'Willson');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (39, 7, 0, 'Willson');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (40, 7, 0, 'Willson');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (41, 7, 0, 'Willson');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (42, 7, 0, 'Willson');
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (43, 8, 0, NULL);
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (44, 8, 0, NULL);
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (45, 8, 0, NULL);
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (46, 8, 0, NULL);
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (47, 8, 0, NULL);
INSERT INTO IST659_M002_jjian03.dbo.gear (gear_id, gear_type_id, use_frequency_count, brand) VALUES (48, 8, 0, NULL);
SET IDENTITY_INSERT IST659_M002_jjian03.dbo.gear OFF;


INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (1, 1, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (1, 2, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (1, 3, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (1, 4, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (1, 5, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 6, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 7, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 8, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 9, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 10, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 11, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 12, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 13, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 14, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 15, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 16, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 17, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 18, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 19, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 20, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 21, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 22, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 23, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 24, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 25, 1, 1);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 26, 1, 1);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 27, 1, 1);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (2, 28, 1, 1);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (3, 29, 1, 1);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (3, 30, 1, 1);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (3, 31, 1, 1);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (3, 32, 1, 1);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (4, 33, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (4, 34, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (4, 35, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (4, 36, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (4, 37, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (4, 38, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (4, 39, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (4, 40, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (4, 41, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (4, 42, 1, 0);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (5, 43, 1, 1);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (5, 44, 1, 1);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (5, 45, 1, 1);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (5, 46, 1, 1);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (5, 47, 1, 1);
INSERT INTO IST659_M002_jjian03.dbo.relevant_gear (activity_type_id, gear_id, quantity, is_required) VALUES (5, 48, 1, 1);


SET IDENTITY_INSERT IST659_M002_jjian03.dbo.page_type ON;
INSERT INTO IST659_M002_jjian03.dbo.page_type (page_type_id, page_name, is_enabled) VALUES (1, 'Reservation', 1);
INSERT INTO IST659_M002_jjian03.dbo.page_type (page_type_id, page_name, is_enabled) VALUES (2, 'Reservation Check In', 1);
INSERT INTO IST659_M002_jjian03.dbo.page_type (page_type_id, page_name, is_enabled) VALUES (3, 'Rental', 1);
INSERT INTO IST659_M002_jjian03.dbo.page_type (page_type_id, page_name, is_enabled) VALUES (4, 'Maintenance', 1);
INSERT INTO IST659_M002_jjian03.dbo.page_type (page_type_id, page_name, is_enabled) VALUES (5, 'Membership', 1);
INSERT INTO IST659_M002_jjian03.dbo.page_type (page_type_id, page_name, is_enabled) VALUES (6, 'Page Access', 1);
INSERT INTO IST659_M002_jjian03.dbo.page_type (page_type_id, page_name, is_enabled) VALUES (7, 'Profile', 1);
SET IDENTITY_INSERT IST659_M002_jjian03.dbo.page_type OFF;


SET IDENTITY_INSERT IST659_M002_jjian03.dbo.participant ON;
INSERT INTO IST659_M002_jjian03.dbo.participant (participant_id, email, phone_no, first_name, middle_name, last_name, gender, dob, age, ssn, created_datetime, no_show_count) VALUES (1, 'jjian03@syr.edu', '3158029717', 'Jian', NULL, 'Jian', 'Male', '08/26/2019', 0, NULL, getdate(), 0);
INSERT INTO IST659_M002_jjian03.dbo.participant (participant_id, email, phone_no, first_name, middle_name, last_name, gender, dob, age, ssn, created_datetime, no_show_count) VALUES (2, 'jjian03_1@syr.edu', '3158029717', 'Jian', 'Staff', 'Jian', 'Male', '08/26/2019', 0, NULL, getdate(), 0);
INSERT INTO IST659_M002_jjian03.dbo.participant (participant_id, email, phone_no, first_name, middle_name, last_name, gender, dob, age, ssn, created_datetime, no_show_count) VALUES (3, 'jjian03_2@syr.edu', '3158029717', 'Jian', 'Admin', 'Jian', 'Female', '08/26/2019', 0, NULL, getdate(), 0);
SET IDENTITY_INSERT IST659_M002_jjian03.dbo.participant OFF;


SET IDENTITY_INSERT IST659_M002_jjian03.dbo.credential ON;
INSERT INTO IST659_M002_jjian03.dbo.credential (credential_id, participant_id, password, activated_datetime) VALUES (1, 1, '123', getdate());
INSERT INTO IST659_M002_jjian03.dbo.credential (credential_id, participant_id, password, activated_datetime) VALUES (2, 2, '234', getdate());
INSERT INTO IST659_M002_jjian03.dbo.credential (credential_id, participant_id, password, activated_datetime) VALUES (3, 3, '345', getdate());
SET IDENTITY_INSERT IST659_M002_jjian03.dbo.credential OFF;


SET IDENTITY_INSERT IST659_M002_jjian03.dbo.role ON;
INSERT INTO IST659_M002_jjian03.dbo.[role] (role_id, page_type_id, participant_id, is_enabled) VALUES (1, 1, 1, 1);
INSERT INTO IST659_M002_jjian03.dbo.[role] (role_id, page_type_id, participant_id, is_enabled) VALUES (2, 7, 1, 1);
INSERT INTO IST659_M002_jjian03.dbo.[role] (role_id, page_type_id, participant_id, is_enabled) VALUES (3, 2, 2, 1);
INSERT INTO IST659_M002_jjian03.dbo.[role] (role_id, page_type_id, participant_id, is_enabled) VALUES (4, 3, 2, 1);
INSERT INTO IST659_M002_jjian03.dbo.[role] (role_id, page_type_id, participant_id, is_enabled) VALUES (5, 4, 2, 1);
INSERT INTO IST659_M002_jjian03.dbo.[role] (role_id, page_type_id, participant_id, is_enabled) VALUES (6, 5, 2, 1);
INSERT INTO IST659_M002_jjian03.dbo.[role] (role_id, page_type_id, participant_id, is_enabled) VALUES (7, 7, 2, 1);
INSERT INTO IST659_M002_jjian03.dbo.[role] (role_id, page_type_id, participant_id, is_enabled) VALUES (8, 1, 3, 1);
INSERT INTO IST659_M002_jjian03.dbo.[role] (role_id, page_type_id, participant_id, is_enabled) VALUES (9, 2, 3, 1);
INSERT INTO IST659_M002_jjian03.dbo.[role] (role_id, page_type_id, participant_id, is_enabled) VALUES (10, 3, 3, 1);
INSERT INTO IST659_M002_jjian03.dbo.[role] (role_id, page_type_id, participant_id, is_enabled) VALUES (11, 4, 3, 1);
INSERT INTO IST659_M002_jjian03.dbo.[role] (role_id, page_type_id, participant_id, is_enabled) VALUES (12, 5, 3, 1);
INSERT INTO IST659_M002_jjian03.dbo.[role] (role_id, page_type_id, participant_id, is_enabled) VALUES (13, 6, 3, 1);
INSERT INTO IST659_M002_jjian03.dbo.[role] (role_id, page_type_id, participant_id, is_enabled) VALUES (14, 7, 3, 1);
SET IDENTITY_INSERT IST659_M002_jjian03.dbo.role OFF;

