package edu.syr9.fge.domain;

public class Role {

	private Long roleId;
	private PageType pageType;
	private User user;

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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
