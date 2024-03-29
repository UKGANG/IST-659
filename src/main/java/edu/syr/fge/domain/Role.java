package edu.syr.fge.domain;

public class Role {

	private Long roleId;
	private PageType pageType;
	private Participant user;

	public Long getRoleId() {
		return roleId;
	}

	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}

	public PageType getPageType() {
		return pageType;
	}

	public void setPageType(PageType pageType) {
		this.pageType = pageType;
	}

	public Participant getUser() {
		return user;
	}

	public void setUser(Participant user) {
		this.user = user;
	}

}
