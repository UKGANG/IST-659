CREATE TRIGGER dbo.tg_gear_frequency
ON IST659_M002_jjian03.dbo.rental_history
FOR INSERT
AS
IF @@ROWCOUNT >=1
BEGIN
	UPDATE IST659_M002_jjian03.dbo.gear
	SET use_frequency_count=use_frequency_count+1
	FROM IST659_M002_jjian03.dbo.gear g
	JOIN inserted i ON g.gear_id = i.gear_id;

END 