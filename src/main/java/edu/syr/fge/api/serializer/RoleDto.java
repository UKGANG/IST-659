package edu.syr.fge.api.serializer;

public class RoleDto {
	private Long roleId;
	private PageTypeDto pageType;
	private UserDto user;

	public Long getRoleId() {
		return roleId;
	}

	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}

	public PageTypeDto getPageType() {
		return pageType;
	}

	public void setPageType(PageTypeDto pageType) {
		this.pageType = pageType;
	}

	public UserDto getUser() {
		return user;
	}

	public void setUser(UserDto user) {
		this.user = user;
	}

}
