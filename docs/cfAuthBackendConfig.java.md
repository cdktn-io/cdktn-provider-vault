# `cfAuthBackendConfig` Submodule <a name="`cfAuthBackendConfig` Submodule" id="@cdktn/provider-vault.cfAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfAuthBackendConfig <a name="CfAuthBackendConfig" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config vault_cf_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.cf_auth_backend_config.CfAuthBackendConfig;

CfAuthBackendConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cfApiAddr(java.lang.String)
    .cfPasswordWo(java.lang.String)
    .cfPasswordWoVersion(java.lang.Number)
    .cfUsername(java.lang.String)
    .identityCaCertificates(java.util.List<java.lang.String>)
    .mount(java.lang.String)
//  .cfApiTrustedCertificates(java.util.List<java.lang.String>)
//  .cfTimeout(java.lang.Number)
//  .loginMaxSecondsNotAfter(java.lang.Number)
//  .loginMaxSecondsNotBefore(java.lang.Number)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfApiAddr">cfApiAddr</a></code> | <code>java.lang.String</code> | CF's full API address, used for verifying that a given `CF_INSTANCE_CERT` shows an application ID, space ID, and organization ID that presently exist. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfPasswordWo">cfPasswordWo</a></code> | <code>java.lang.String</code> | The password for authenticating to the CF API. This attribute is write-only and is never stored in Terraform state. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfPasswordWoVersion">cfPasswordWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for 'cf_password_wo'. Increment this value to trigger an update when only the write-only password changes. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfUsername">cfUsername</a></code> | <code>java.lang.String</code> | The username for authenticating to the CF API. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.identityCaCertificates">identityCaCertificates</a></code> | <code>java.util.List<java.lang.String></code> | The root CA certificate(s) to be used for verifying that the `CF_INSTANCE_CERT` presented for logging in was issued by the proper authority. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the CF auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfApiTrustedCertificates">cfApiTrustedCertificates</a></code> | <code>java.util.List<java.lang.String></code> | The certificate(s) presented by the CF API. Configures Vault to trust these certificates when making API calls. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfTimeout">cfTimeout</a></code> | <code>java.lang.Number</code> | The timeout for the CF API in seconds. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.loginMaxSecondsNotAfter">loginMaxSecondsNotAfter</a></code> | <code>java.lang.Number</code> | The maximum number of seconds in the future when a signature could have been created. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.loginMaxSecondsNotBefore">loginMaxSecondsNotBefore</a></code> | <code>java.lang.Number</code> | The maximum number of seconds in the past when a signature could have been created. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cfApiAddr`<sup>Required</sup> <a name="cfApiAddr" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfApiAddr"></a>

- *Type:* java.lang.String

CF's full API address, used for verifying that a given `CF_INSTANCE_CERT` shows an application ID, space ID, and organization ID that presently exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#cf_api_addr CfAuthBackendConfig#cf_api_addr}

---

##### `cfPasswordWo`<sup>Required</sup> <a name="cfPasswordWo" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfPasswordWo"></a>

- *Type:* java.lang.String

The password for authenticating to the CF API. This attribute is write-only and is never stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#cf_password_wo CfAuthBackendConfig#cf_password_wo}

---

##### `cfPasswordWoVersion`<sup>Required</sup> <a name="cfPasswordWoVersion" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfPasswordWoVersion"></a>

- *Type:* java.lang.Number

Version counter for 'cf_password_wo'. Increment this value to trigger an update when only the write-only password changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#cf_password_wo_version CfAuthBackendConfig#cf_password_wo_version}

---

##### `cfUsername`<sup>Required</sup> <a name="cfUsername" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfUsername"></a>

- *Type:* java.lang.String

The username for authenticating to the CF API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#cf_username CfAuthBackendConfig#cf_username}

---

##### `identityCaCertificates`<sup>Required</sup> <a name="identityCaCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.identityCaCertificates"></a>

- *Type:* java.util.List<java.lang.String>

The root CA certificate(s) to be used for verifying that the `CF_INSTANCE_CERT` presented for logging in was issued by the proper authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#identity_ca_certificates CfAuthBackendConfig#identity_ca_certificates}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Mount path for the CF auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#mount CfAuthBackendConfig#mount}

---

##### `cfApiTrustedCertificates`<sup>Optional</sup> <a name="cfApiTrustedCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfApiTrustedCertificates"></a>

- *Type:* java.util.List<java.lang.String>

The certificate(s) presented by the CF API. Configures Vault to trust these certificates when making API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#cf_api_trusted_certificates CfAuthBackendConfig#cf_api_trusted_certificates}

---

##### `cfTimeout`<sup>Optional</sup> <a name="cfTimeout" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfTimeout"></a>

- *Type:* java.lang.Number

The timeout for the CF API in seconds.

Defaults to `0` (no timeout). Removing this field from config resets the value to `0` in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#cf_timeout CfAuthBackendConfig#cf_timeout}

---

##### `loginMaxSecondsNotAfter`<sup>Optional</sup> <a name="loginMaxSecondsNotAfter" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.loginMaxSecondsNotAfter"></a>

- *Type:* java.lang.Number

The maximum number of seconds in the future when a signature could have been created.

Defaults to `60`. This field is `Computed`: if removed from config, Vault retains the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#login_max_seconds_not_after CfAuthBackendConfig#login_max_seconds_not_after}

---

##### `loginMaxSecondsNotBefore`<sup>Optional</sup> <a name="loginMaxSecondsNotBefore" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.loginMaxSecondsNotBefore"></a>

- *Type:* java.lang.Number

The maximum number of seconds in the past when a signature could have been created.

Defaults to `300`. This field is `Computed`: if removed from config, Vault retains the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#login_max_seconds_not_before CfAuthBackendConfig#login_max_seconds_not_before}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#namespace CfAuthBackendConfig#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfApiTrustedCertificates">resetCfApiTrustedCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfTimeout">resetCfTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotAfter">resetLoginMaxSecondsNotAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotBefore">resetLoginMaxSecondsNotBefore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCfApiTrustedCertificates` <a name="resetCfApiTrustedCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfApiTrustedCertificates"></a>

```java
public void resetCfApiTrustedCertificates()
```

##### `resetCfTimeout` <a name="resetCfTimeout" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfTimeout"></a>

```java
public void resetCfTimeout()
```

##### `resetLoginMaxSecondsNotAfter` <a name="resetLoginMaxSecondsNotAfter" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotAfter"></a>

```java
public void resetLoginMaxSecondsNotAfter()
```

##### `resetLoginMaxSecondsNotBefore` <a name="resetLoginMaxSecondsNotBefore" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotBefore"></a>

```java
public void resetLoginMaxSecondsNotBefore()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CfAuthBackendConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isConstruct"></a>

```java
import io.cdktn.providers.vault.cf_auth_backend_config.CfAuthBackendConfig;

CfAuthBackendConfig.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.cf_auth_backend_config.CfAuthBackendConfig;

CfAuthBackendConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.cf_auth_backend_config.CfAuthBackendConfig;

CfAuthBackendConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.cf_auth_backend_config.CfAuthBackendConfig;

CfAuthBackendConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CfAuthBackendConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CfAuthBackendConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CfAuthBackendConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CfAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CfAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddrInput">cfApiAddrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificatesInput">cfApiTrustedCertificatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWoInput">cfPasswordWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWoVersionInput">cfPasswordWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeoutInput">cfTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsernameInput">cfUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificatesInput">identityCaCertificatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfterInput">loginMaxSecondsNotAfterInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBeforeInput">loginMaxSecondsNotBeforeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddr">cfApiAddr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificates">cfApiTrustedCertificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWo">cfPasswordWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWoVersion">cfPasswordWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeout">cfTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsername">cfUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificates">identityCaCertificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfter">loginMaxSecondsNotAfter</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBefore">loginMaxSecondsNotBefore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cfApiAddrInput`<sup>Optional</sup> <a name="cfApiAddrInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddrInput"></a>

```java
public java.lang.String getCfApiAddrInput();
```

- *Type:* java.lang.String

---

##### `cfApiTrustedCertificatesInput`<sup>Optional</sup> <a name="cfApiTrustedCertificatesInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificatesInput"></a>

```java
public java.util.List<java.lang.String> getCfApiTrustedCertificatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cfPasswordWoInput`<sup>Optional</sup> <a name="cfPasswordWoInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWoInput"></a>

```java
public java.lang.String getCfPasswordWoInput();
```

- *Type:* java.lang.String

---

##### `cfPasswordWoVersionInput`<sup>Optional</sup> <a name="cfPasswordWoVersionInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWoVersionInput"></a>

```java
public java.lang.Number getCfPasswordWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `cfTimeoutInput`<sup>Optional</sup> <a name="cfTimeoutInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeoutInput"></a>

```java
public java.lang.Number getCfTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `cfUsernameInput`<sup>Optional</sup> <a name="cfUsernameInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsernameInput"></a>

```java
public java.lang.String getCfUsernameInput();
```

- *Type:* java.lang.String

---

##### `identityCaCertificatesInput`<sup>Optional</sup> <a name="identityCaCertificatesInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificatesInput"></a>

```java
public java.util.List<java.lang.String> getIdentityCaCertificatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMaxSecondsNotAfterInput`<sup>Optional</sup> <a name="loginMaxSecondsNotAfterInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfterInput"></a>

```java
public java.lang.Number getLoginMaxSecondsNotAfterInput();
```

- *Type:* java.lang.Number

---

##### `loginMaxSecondsNotBeforeInput`<sup>Optional</sup> <a name="loginMaxSecondsNotBeforeInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBeforeInput"></a>

```java
public java.lang.Number getLoginMaxSecondsNotBeforeInput();
```

- *Type:* java.lang.Number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `cfApiAddr`<sup>Required</sup> <a name="cfApiAddr" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddr"></a>

```java
public java.lang.String getCfApiAddr();
```

- *Type:* java.lang.String

---

##### `cfApiTrustedCertificates`<sup>Required</sup> <a name="cfApiTrustedCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificates"></a>

```java
public java.util.List<java.lang.String> getCfApiTrustedCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cfPasswordWo`<sup>Required</sup> <a name="cfPasswordWo" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWo"></a>

```java
public java.lang.String getCfPasswordWo();
```

- *Type:* java.lang.String

---

##### `cfPasswordWoVersion`<sup>Required</sup> <a name="cfPasswordWoVersion" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWoVersion"></a>

```java
public java.lang.Number getCfPasswordWoVersion();
```

- *Type:* java.lang.Number

---

##### `cfTimeout`<sup>Required</sup> <a name="cfTimeout" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeout"></a>

```java
public java.lang.Number getCfTimeout();
```

- *Type:* java.lang.Number

---

##### `cfUsername`<sup>Required</sup> <a name="cfUsername" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsername"></a>

```java
public java.lang.String getCfUsername();
```

- *Type:* java.lang.String

---

##### `identityCaCertificates`<sup>Required</sup> <a name="identityCaCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificates"></a>

```java
public java.util.List<java.lang.String> getIdentityCaCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMaxSecondsNotAfter`<sup>Required</sup> <a name="loginMaxSecondsNotAfter" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfter"></a>

```java
public java.lang.Number getLoginMaxSecondsNotAfter();
```

- *Type:* java.lang.Number

---

##### `loginMaxSecondsNotBefore`<sup>Required</sup> <a name="loginMaxSecondsNotBefore" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBefore"></a>

```java
public java.lang.Number getLoginMaxSecondsNotBefore();
```

- *Type:* java.lang.Number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CfAuthBackendConfigConfig <a name="CfAuthBackendConfigConfig" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.cf_auth_backend_config.CfAuthBackendConfigConfig;

CfAuthBackendConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cfApiAddr(java.lang.String)
    .cfPasswordWo(java.lang.String)
    .cfPasswordWoVersion(java.lang.Number)
    .cfUsername(java.lang.String)
    .identityCaCertificates(java.util.List<java.lang.String>)
    .mount(java.lang.String)
//  .cfApiTrustedCertificates(java.util.List<java.lang.String>)
//  .cfTimeout(java.lang.Number)
//  .loginMaxSecondsNotAfter(java.lang.Number)
//  .loginMaxSecondsNotBefore(java.lang.Number)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiAddr">cfApiAddr</a></code> | <code>java.lang.String</code> | CF's full API address, used for verifying that a given `CF_INSTANCE_CERT` shows an application ID, space ID, and organization ID that presently exist. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfPasswordWo">cfPasswordWo</a></code> | <code>java.lang.String</code> | The password for authenticating to the CF API. This attribute is write-only and is never stored in Terraform state. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfPasswordWoVersion">cfPasswordWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for 'cf_password_wo'. Increment this value to trigger an update when only the write-only password changes. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfUsername">cfUsername</a></code> | <code>java.lang.String</code> | The username for authenticating to the CF API. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.identityCaCertificates">identityCaCertificates</a></code> | <code>java.util.List<java.lang.String></code> | The root CA certificate(s) to be used for verifying that the `CF_INSTANCE_CERT` presented for logging in was issued by the proper authority. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the CF auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiTrustedCertificates">cfApiTrustedCertificates</a></code> | <code>java.util.List<java.lang.String></code> | The certificate(s) presented by the CF API. Configures Vault to trust these certificates when making API calls. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfTimeout">cfTimeout</a></code> | <code>java.lang.Number</code> | The timeout for the CF API in seconds. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotAfter">loginMaxSecondsNotAfter</a></code> | <code>java.lang.Number</code> | The maximum number of seconds in the future when a signature could have been created. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotBefore">loginMaxSecondsNotBefore</a></code> | <code>java.lang.Number</code> | The maximum number of seconds in the past when a signature could have been created. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cfApiAddr`<sup>Required</sup> <a name="cfApiAddr" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiAddr"></a>

```java
public java.lang.String getCfApiAddr();
```

- *Type:* java.lang.String

CF's full API address, used for verifying that a given `CF_INSTANCE_CERT` shows an application ID, space ID, and organization ID that presently exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#cf_api_addr CfAuthBackendConfig#cf_api_addr}

---

##### `cfPasswordWo`<sup>Required</sup> <a name="cfPasswordWo" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfPasswordWo"></a>

```java
public java.lang.String getCfPasswordWo();
```

- *Type:* java.lang.String

The password for authenticating to the CF API. This attribute is write-only and is never stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#cf_password_wo CfAuthBackendConfig#cf_password_wo}

---

##### `cfPasswordWoVersion`<sup>Required</sup> <a name="cfPasswordWoVersion" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfPasswordWoVersion"></a>

```java
public java.lang.Number getCfPasswordWoVersion();
```

- *Type:* java.lang.Number

Version counter for 'cf_password_wo'. Increment this value to trigger an update when only the write-only password changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#cf_password_wo_version CfAuthBackendConfig#cf_password_wo_version}

---

##### `cfUsername`<sup>Required</sup> <a name="cfUsername" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfUsername"></a>

```java
public java.lang.String getCfUsername();
```

- *Type:* java.lang.String

The username for authenticating to the CF API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#cf_username CfAuthBackendConfig#cf_username}

---

##### `identityCaCertificates`<sup>Required</sup> <a name="identityCaCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.identityCaCertificates"></a>

```java
public java.util.List<java.lang.String> getIdentityCaCertificates();
```

- *Type:* java.util.List<java.lang.String>

The root CA certificate(s) to be used for verifying that the `CF_INSTANCE_CERT` presented for logging in was issued by the proper authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#identity_ca_certificates CfAuthBackendConfig#identity_ca_certificates}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Mount path for the CF auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#mount CfAuthBackendConfig#mount}

---

##### `cfApiTrustedCertificates`<sup>Optional</sup> <a name="cfApiTrustedCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiTrustedCertificates"></a>

```java
public java.util.List<java.lang.String> getCfApiTrustedCertificates();
```

- *Type:* java.util.List<java.lang.String>

The certificate(s) presented by the CF API. Configures Vault to trust these certificates when making API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#cf_api_trusted_certificates CfAuthBackendConfig#cf_api_trusted_certificates}

---

##### `cfTimeout`<sup>Optional</sup> <a name="cfTimeout" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfTimeout"></a>

```java
public java.lang.Number getCfTimeout();
```

- *Type:* java.lang.Number

The timeout for the CF API in seconds.

Defaults to `0` (no timeout). Removing this field from config resets the value to `0` in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#cf_timeout CfAuthBackendConfig#cf_timeout}

---

##### `loginMaxSecondsNotAfter`<sup>Optional</sup> <a name="loginMaxSecondsNotAfter" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotAfter"></a>

```java
public java.lang.Number getLoginMaxSecondsNotAfter();
```

- *Type:* java.lang.Number

The maximum number of seconds in the future when a signature could have been created.

Defaults to `60`. This field is `Computed`: if removed from config, Vault retains the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#login_max_seconds_not_after CfAuthBackendConfig#login_max_seconds_not_after}

---

##### `loginMaxSecondsNotBefore`<sup>Optional</sup> <a name="loginMaxSecondsNotBefore" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotBefore"></a>

```java
public java.lang.Number getLoginMaxSecondsNotBefore();
```

- *Type:* java.lang.Number

The maximum number of seconds in the past when a signature could have been created.

Defaults to `300`. This field is `Computed`: if removed from config, Vault retains the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#login_max_seconds_not_before CfAuthBackendConfig#login_max_seconds_not_before}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_config#namespace CfAuthBackendConfig#namespace}

---



