CREATE PROCEDURE dbo.sp_participant_no_show_cnt 
AS 
BEGIN 
	UPDATE IST659_M002_jjian03.dbo.participant 
	SET no_show_count = no_show_count + 1 
	FROM IST659_M002_jjian03.dbo.reservation r 
	JOIN IST659_M002_jjian03.dbo.organizer o ON r.organizer_id = o.organizer_id 
	JOIN IST659_M002_jjian03.dbo.participant p ON o.participant_id = p.participant_id 
	WHERE r.checked_in IS NULL;
END;