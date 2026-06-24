# `approleAuthBackendLogin` Submodule <a name="`approleAuthBackendLogin` Submodule" id="@cdktn/provider-vault.approleAuthBackendLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApproleAuthBackendLogin <a name="ApproleAuthBackendLogin" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/approle_auth_backend_login vault_approle_auth_backend_login}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer"></a>

```java
import io.cdktn.providers.vault.approle_auth_backend_login.ApproleAuthBackendLogin;

ApproleAuthBackendLogin.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .roleId(java.lang.String)
//  .backend(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .secretId(java.lang.String)
//  .secretIdWo(java.lang.String)
//  .secretIdWoVersion(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.roleId">roleId</a></code> | <code>java.lang.String</code> | The RoleID to log in with. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/approle_auth_backend_login#id ApproleAuthBackendLogin#id}. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.secretId">secretId</a></code> | <code>java.lang.String</code> | The SecretID to log in with. Required unless `bind_secret_id` is set to false on the role. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.secretIdWo">secretIdWo</a></code> | <code>java.lang.String</code> | The SecretID to log in with. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.secretIdWoVersion">secretIdWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only secret_id field. Increment this to trigger re-authentication with a new SecretID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.roleId"></a>

- *Type:* java.lang.String

The RoleID to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/approle_auth_backend_login#role_id ApproleAuthBackendLogin#role_id}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/approle_auth_backend_login#backend ApproleAuthBackendLogin#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/approle_auth_backend_login#id ApproleAuthBackendLogin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/approle_auth_backend_login#namespace ApproleAuthBackendLogin#namespace}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.secretId"></a>

- *Type:* java.lang.String

The SecretID to log in with. Required unless `bind_secret_id` is set to false on the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/approle_auth_backend_login#secret_id ApproleAuthBackendLogin#secret_id}

---

##### `secretIdWo`<sup>Optional</sup> <a name="secretIdWo" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.secretIdWo"></a>

- *Type:* java.lang.String

The SecretID to log in with.

Write-only attribute that can accept ephemeral values. Required unless `bind_secret_id` is set to false on the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/approle_auth_backend_login#secret_id_wo ApproleAuthBackendLogin#secret_id_wo}

---

##### `secretIdWoVersion`<sup>Optional</sup> <a name="secretIdWoVersion" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.secretIdWoVersion"></a>

- *Type:* java.lang.Number

Version counter for the write-only secret_id field. Increment this to trigger re-authentication with a new SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/approle_auth_backend_login#secret_id_wo_version ApproleAuthBackendLogin#secret_id_wo_version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetSecretId">resetSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetSecretIdWo">resetSecretIdWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetSecretIdWoVersion">resetSecretIdWoVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBackend` <a name="resetBackend" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetSecretId` <a name="resetSecretId" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetSecretId"></a>

```java
public void resetSecretId()
```

##### `resetSecretIdWo` <a name="resetSecretIdWo" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetSecretIdWo"></a>

```java
public void resetSecretIdWo()
```

##### `resetSecretIdWoVersion` <a name="resetSecretIdWoVersion" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetSecretIdWoVersion"></a>

```java
public void resetSecretIdWoVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApproleAuthBackendLogin resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isConstruct"></a>

```java
import io.cdktn.providers.vault.approle_auth_backend_login.ApproleAuthBackendLogin;

ApproleAuthBackendLogin.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.approle_auth_backend_login.ApproleAuthBackendLogin;

ApproleAuthBackendLogin.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.approle_auth_backend_login.ApproleAuthBackendLogin;

ApproleAuthBackendLogin.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.approle_auth_backend_login.ApproleAuthBackendLogin;

ApproleAuthBackendLogin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApproleAuthBackendLogin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApproleAuthBackendLogin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApproleAuthBackendLogin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApproleAuthBackendLogin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/approle_auth_backend_login#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApproleAuthBackendLogin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.accessor">accessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseDuration">leaseDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseStarted">leaseStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.metadata">metadata</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.renewable">renewable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleIdInput">roleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdWoInput">secretIdWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdWoVersionInput">secretIdWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleId">roleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdWo">secretIdWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdWoVersion">secretIdWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.accessor"></a>

```java
public java.lang.String getAccessor();
```

- *Type:* java.lang.String

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseDuration"></a>

```java
public java.lang.Number getLeaseDuration();
```

- *Type:* java.lang.Number

---

##### `leaseStarted`<sup>Required</sup> <a name="leaseStarted" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseStarted"></a>

```java
public java.lang.String getLeaseStarted();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.renewable"></a>

```java
public IResolvable getRenewable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleIdInput"></a>

```java
public java.lang.String getRoleIdInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `secretIdWoInput`<sup>Optional</sup> <a name="secretIdWoInput" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdWoInput"></a>

```java
public java.lang.String getSecretIdWoInput();
```

- *Type:* java.lang.String

---

##### `secretIdWoVersionInput`<sup>Optional</sup> <a name="secretIdWoVersionInput" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdWoVersionInput"></a>

```java
public java.lang.Number getSecretIdWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `secretIdWo`<sup>Required</sup> <a name="secretIdWo" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdWo"></a>

```java
public java.lang.String getSecretIdWo();
```

- *Type:* java.lang.String

---

##### `secretIdWoVersion`<sup>Required</sup> <a name="secretIdWoVersion" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdWoVersion"></a>

```java
public java.lang.Number getSecretIdWoVersion();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApproleAuthBackendLoginConfig <a name="ApproleAuthBackendLoginConfig" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.approle_auth_backend_login.ApproleAuthBackendLoginConfig;

ApproleAuthBackendLoginConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .roleId(java.lang.String)
//  .backend(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .secretId(java.lang.String)
//  .secretIdWo(java.lang.String)
//  .secretIdWoVersion(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.roleId">roleId</a></code> | <code>java.lang.String</code> | The RoleID to log in with. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/approle_auth_backend_login#id ApproleAuthBackendLogin#id}. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | The SecretID to log in with. Required unless `bind_secret_id` is set to false on the role. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.secretIdWo">secretIdWo</a></code> | <code>java.lang.String</code> | The SecretID to log in with. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.secretIdWoVersion">secretIdWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only secret_id field. Increment this to trigger re-authentication with a new SecretID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

The RoleID to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/approle_auth_backend_login#role_id ApproleAuthBackendLogin#role_id}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/approle_auth_backend_login#backend ApproleAuthBackendLogin#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/approle_auth_backend_login#id ApproleAuthBackendLogin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/approle_auth_backend_login#namespace ApproleAuthBackendLogin#namespace}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

The SecretID to log in with. Required unless `bind_secret_id` is set to false on the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/approle_auth_backend_login#secret_id ApproleAuthBackendLogin#secret_id}

---

##### `secretIdWo`<sup>Optional</sup> <a name="secretIdWo" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.secretIdWo"></a>

```java
public java.lang.String getSecretIdWo();
```

- *Type:* java.lang.String

The SecretID to log in with.

Write-only attribute that can accept ephemeral values. Required unless `bind_secret_id` is set to false on the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/approle_auth_backend_login#secret_id_wo ApproleAuthBackendLogin#secret_id_wo}

---

##### `secretIdWoVersion`<sup>Optional</sup> <a name="secretIdWoVersion" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.secretIdWoVersion"></a>

```java
public java.lang.Number getSecretIdWoVersion();
```

- *Type:* java.lang.Number

Version counter for the write-only secret_id field. Increment this to trigger re-authentication with a new SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/approle_auth_backend_login#secret_id_wo_version ApproleAuthBackendLogin#secret_id_wo_version}

---



