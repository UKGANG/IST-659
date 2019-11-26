package edu.syr.fge.exception;

public class FGEException extends RuntimeException {

	private String errMsg;
	private static final long serialVersionUID = -7240005368561696796L;

	public FGEException(String errMsg) {
		this.errMsg = errMsg;
	}

	public String getErrMsg() {
		return errMsg;
	}

}
