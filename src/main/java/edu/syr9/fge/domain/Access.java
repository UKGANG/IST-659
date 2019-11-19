package edu.syr9.fge.domain;

public class Access {
    private Long accessId;
    private String pageName;
    private boolean isEnabled;

    public Long getAccessId() {
        return accessId;
    }

    public void setAccessId(Long accessId) {
        this.accessId = accessId;
    }

    public String getPageName() {
        return pageName;
    }

    public void setPageName(String pageName) {
        this.pageName = pageName;
    }

    public boolean isEnabled() {
        return isEnabled;
    }

    public void setEnabled(boolean enabled) {
        isEnabled = enabled;
    }

}
