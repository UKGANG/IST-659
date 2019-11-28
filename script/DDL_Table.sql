IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='timeslot' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.timeslot
	(
		timeslot_id         BIGINT          NOT NULL,
		reservation_id      BIGINT          NOT NULL,
		start_datetime      DATETIME        NOT NULL,
		end_datetime        DATETIME        NOT NULL,
	)

	PRINT 'CREATE TABLE dbo.timeslot'

	ALTER TABLE dbo.[timeslot]
		ADD CONSTRAINT PK_timeslot PRIMARY KEY CLUSTERED (timeslot_id)

	PRINT 'CREATE primary key pk_timeslot on table [dbo].[timeslot]'
END

IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='role' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.role
	(
		role_id             BIGINT          NOT NULL,
		page_type_id           BIGINT          NOT NULL,
		participant_id             BIGINT          NOT NULL,
		is_enabled          BIT             NOT NULL,
	)

	PRINT 'CREATE TABLE dbo.role'

	ALTER TABLE dbo.[role]
		ADD CONSTRAINT PK_role PRIMARY KEY CLUSTERED (role_id)

	PRINT 'CREATE primary key pk_role on table [dbo].[role]'
END

IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='reservation' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.reservation
	(
		reservation_id      BIGINT          NOT NULL,
		organizer_id        BIGINT          NOT NULL,
		court_id            BIGINT          NOT NULL,
		activity_type_id    SMALLINT          NOT NULL,
		reservation_token   NVARCHAR(6)     NOT NULL,
		reservation_date    DATETIME     NOT NULL,
		participant_count   SMALLINT,
	)

	PRINT 'CREATE TABLE dbo.reservation'

	ALTER TABLE dbo.[reservation]
		ADD CONSTRAINT PK_reservation PRIMARY KEY CLUSTERED (reservation_id)

	PRINT 'CREATE primary key pk_reservation on table [dbo].[reservation]'
END

IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='rental_history' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.rental_history
	(
		rental_history_id	BIGINT         NOT NULL,
		organizer_id        BIGINT          NOT NULL,
		gear_id             BIGINT          NOT NULL,
		borrow_datetime     DATETIME        NOT NULL,
		return_datetime     DATETIME
	)

	PRINT 'CREATE TABLE dbo.rental_history'

	ALTER TABLE dbo.[rental_history]
		ADD CONSTRAINT PK_rental_history PRIMARY KEY CLUSTERED (rental_history_id)

	PRINT 'CREATE primary key pk_rental_history on table [dbo].[rental_history]'
END

IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='relevant_gear' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.relevant_gear
	(
		activity_type_id	SMALLINT          NOT NULL,
		gear_id             BIGINT          NOT NULL,
		quantity            INT             NOT NULL,
		is_required         BIT             NOT NULL
	)

	PRINT 'CREATE TABLE dbo.relevant_gear'

	ALTER TABLE dbo.[relevant_gear]
		ADD CONSTRAINT PK_relevant_gear PRIMARY KEY CLUSTERED (activity_type_id, gear_id)

	PRINT 'CREATE primary key pk_relevant_gear on table [dbo].[relevant_gear]'
END

IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='participant' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.participant
	(
		participant_id             BIGINT          NOT NULL,
		email               NVARCHAR(255)   NOT NULL,
		phone_no            BIGINT             NOT NULL,
		first_name          NVARCHAR(255)   NOT NULL,
		middle_name         NVARCHAR(255),
		last_name           NVARCHAR(255)   NOT NULL,
		gender              NVARCHAR(10)    NOT NULL,
		dob                 DATETIME      NOT NULL,
		age                 SMALLINT,
		ssn                 VARCHAR(9),
		created_datetime    DATETIME        NOT NULL,
		no_show_count       SMALLINT
	)

	PRINT 'CREATE TABLE dbo.participant'

	ALTER TABLE dbo.[participant]
		ADD CONSTRAINT PK_participant PRIMARY KEY CLUSTERED (participant_id)

	PRINT 'CREATE primary key pk_participant on table [dbo].[participant]'
END

IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='page_type' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.page_type
	(
		page_type_id           BIGINT          NOT NULL,
		page_name           NVARCHAR(255)   NOT NULL,
		is_enabled          BIT             NOT NULL
	)

	PRINT 'CREATE TABLE dbo.page_type'

	ALTER TABLE dbo.[page_type]
	    ADD CONSTRAINT PK_page_type PRIMARY KEY CLUSTERED (page_type_id)

	PRINT 'CREATE primary key pk_page_type on table [dbo].[page_type]'
END

IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='organizer' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.organizer
	(
		organizer_id        BIGINT          NOT NULL,
		participant_id             BIGINT          NOT NULL,
		created_datetime    DATETIME        NOT NULL
	)

	PRINT 'CREATE TABLE dbo.organizer'

	ALTER TABLE dbo.[organizer]
		ADD CONSTRAINT PK_organizer PRIMARY KEY CLUSTERED (organizer_id)

	PRINT 'CREATE primary key pk_organizer on table [dbo].[organizer]'
END

IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='gear' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.gear
	(
		gear_id             BIGINT          NOT NULL,
		gear_type_id        BIGINT          NOT NULL,
		use_frequency_count INT             NOT NULL,
		brand               NVARCHAR(255)
	)

	PRINT 'CREATE TABLE dbo.gear'

	ALTER TABLE dbo.[gear]
	    ADD CONSTRAINT pk_gear PRIMARY KEY CLUSTERED (gear_id)

	PRINT 'CREATE primary key pk_gear on table [dbo].[gear]'
END

IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='gear_type' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.gear_type
	(
		gear_type_id        BIGINT          NOT NULL,
		gear_name           NVARCHAR(255)   NOT NULL
	)

	PRINT 'CREATE TABLE dbo.gear_type'

	ALTER TABLE dbo.[gear_type]
		ADD CONSTRAINT pk_gear_type PRIMARY KEY CLUSTERED (gear_type_id)

	PRINT 'CREATE primary key pk_gear_type on table [dbo].[gear_type]'
END

IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='credential' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.credential
	(
		credential_id       BIGINT          NOT NULL,
		participant_id             BIGINT          NOT NULL,
		password            NVARCHAR(255)   NOT NULL,
		activated_datetime  DATETIME        NOT NULL
	)

	PRINT 'CREATE TABLE dbo.credential'

	ALTER TABLE dbo.[credential]
	    ADD CONSTRAINT PK_credential PRIMARY KEY CLUSTERED (credential_id)

	PRINT 'CREATE primary key pk_credential on table [dbo].[credential]'
END

IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='court' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.court
	(
		court_id            BIGINT          NOT NULL,
		court_location_id   BIGINT          NOT NULL,
		court_name          NVARCHAR(255)   NOT NULL
	)

	PRINT 'CREATE TABLE dbo.court'

	ALTER TABLE dbo.[court]
	    ADD CONSTRAINT PK_court PRIMARY KEY CLUSTERED (court_id)

	PRINT 'CREATE primary key pk_court on table [dbo].[court]'
END

IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='court_location' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.court_location
	(
		court_location_id	BIGINT          NOT NULL,
		court_location_name	NVARCHAR(255)   NOT NULL,
	)

	PRINT 'CREATE TABLE dbo.court_location'

	ALTER TABLE dbo.[court_location]
		ADD CONSTRAINT PK_court_location PRIMARY KEY CLUSTERED (court_location_id)

	PRINT 'CREATE primary key pk_court_location on table [dbo].[court_location]'
END

IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='available_activity' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.available_activity
	(
		court_id            BIGINT          NOT NULL,
		activity_type_id    SMALLINT        NOT NULL,
		created_datetime    DATETIME        NOT NULL
	)

	PRINT 'CREATE TABLE dbo.available_activity'

	ALTER TABLE dbo.[available_activity]
	    ADD CONSTRAINT PK_available_activity PRIMARY KEY CLUSTERED (court_id, activity_type_id)

	PRINT 'CREATE primary key pk_available_activity on table [dbo].[available_activity]'
END

IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='activity_type' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.activity_type
	(
		activity_type_id    SMALLINT        NOT NULL,
		activity_name       NVARCHAR(255)   NOT NULL,
		maximum_participant SMALLINT        NOT NULL
	)

	PRINT 'CREATE TABLE dbo.activity_type'

	ALTER TABLE dbo.[activity_type]
	    ADD CONSTRAINT PK_activity_type PRIMARY KEY CLUSTERED (activity_type_id)

	PRINT 'CREATE primary key pk_activity_type on table [dbo].[activity_type]'
END

