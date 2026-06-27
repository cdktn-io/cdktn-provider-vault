# `gcpSecretRoleset` Submodule <a name="`gcpSecretRoleset` Submodule" id="@cdktn/provider-vault.gcpSecretRoleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpSecretRoleset <a name="GcpSecretRoleset" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset vault_gcp_secret_roleset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer"></a>

```java
import io.cdktn.providers.vault.gcp_secret_roleset.GcpSecretRoleset;

GcpSecretRoleset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
    .binding(IResolvable|java.util.List<GcpSecretRolesetBinding>)
    .project(java.lang.String)
    .roleset(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .secretType(java.lang.String)
//  .tokenScopes(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Path where the GCP secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.binding">binding</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>></code> | binding block. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Name of the GCP project that this roleset's service account will belong to. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.roleset">roleset</a></code> | <code>java.lang.String</code> | Name of the RoleSet to create. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#id GcpSecretRoleset#id}. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.secretType">secretType</a></code> | <code>java.lang.String</code> | Type of secret generated for this role set. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.tokenScopes">tokenScopes</a></code> | <code>java.util.List<java.lang.String></code> | List of OAuth scopes to assign to `access_token` secrets generated under this role set (`access_token` role sets only). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Path where the GCP secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#backend GcpSecretRoleset#backend}

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.binding"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>>

binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#binding GcpSecretRoleset#binding}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Name of the GCP project that this roleset's service account will belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#project GcpSecretRoleset#project}

---

##### `roleset`<sup>Required</sup> <a name="roleset" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.roleset"></a>

- *Type:* java.lang.String

Name of the RoleSet to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#roleset GcpSecretRoleset#roleset}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#id GcpSecretRoleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#namespace GcpSecretRoleset#namespace}

---

##### `secretType`<sup>Optional</sup> <a name="secretType" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.secretType"></a>

- *Type:* java.lang.String

Type of secret generated for this role set. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#secret_type GcpSecretRoleset#secret_type}

---

##### `tokenScopes`<sup>Optional</sup> <a name="tokenScopes" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.tokenScopes"></a>

- *Type:* java.util.List<java.lang.String>

List of OAuth scopes to assign to `access_token` secrets generated under this role set (`access_token` role sets only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#token_scopes GcpSecretRoleset#token_scopes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.putBinding">putBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetSecretType">resetSecretType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetTokenScopes">resetTokenScopes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBinding` <a name="putBinding" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.putBinding"></a>

```java
public void putBinding(IResolvable|java.util.List<GcpSecretRolesetBinding> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.putBinding.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetSecretType` <a name="resetSecretType" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetSecretType"></a>

```java
public void resetSecretType()
```

##### `resetTokenScopes` <a name="resetTokenScopes" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetTokenScopes"></a>

```java
public void resetTokenScopes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GcpSecretRoleset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isConstruct"></a>

```java
import io.cdktn.providers.vault.gcp_secret_roleset.GcpSecretRoleset;

GcpSecretRoleset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.gcp_secret_roleset.GcpSecretRoleset;

GcpSecretRoleset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.gcp_secret_roleset.GcpSecretRoleset;

GcpSecretRoleset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.gcp_secret_roleset.GcpSecretRoleset;

GcpSecretRoleset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GcpSecretRoleset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GcpSecretRoleset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GcpSecretRoleset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GcpSecretRoleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GcpSecretRoleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.binding">binding</a></code> | <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList">GcpSecretRolesetBindingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.bindingInput">bindingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.rolesetInput">rolesetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.secretTypeInput">secretTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tokenScopesInput">tokenScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.roleset">roleset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.secretType">secretType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tokenScopes">tokenScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.binding"></a>

```java
public GcpSecretRolesetBindingList getBinding();
```

- *Type:* <a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList">GcpSecretRolesetBindingList</a>

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `bindingInput`<sup>Optional</sup> <a name="bindingInput" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.bindingInput"></a>

```java
public IResolvable|java.util.List<GcpSecretRolesetBinding> getBindingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rolesetInput`<sup>Optional</sup> <a name="rolesetInput" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.rolesetInput"></a>

```java
public java.lang.String getRolesetInput();
```

- *Type:* java.lang.String

---

##### `secretTypeInput`<sup>Optional</sup> <a name="secretTypeInput" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.secretTypeInput"></a>

```java
public java.lang.String getSecretTypeInput();
```

- *Type:* java.lang.String

---

##### `tokenScopesInput`<sup>Optional</sup> <a name="tokenScopesInput" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tokenScopesInput"></a>

```java
public java.util.List<java.lang.String> getTokenScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `roleset`<sup>Required</sup> <a name="roleset" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.roleset"></a>

```java
public java.lang.String getRoleset();
```

- *Type:* java.lang.String

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.secretType"></a>

```java
public java.lang.String getSecretType();
```

- *Type:* java.lang.String

---

##### `tokenScopes`<sup>Required</sup> <a name="tokenScopes" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tokenScopes"></a>

```java
public java.util.List<java.lang.String> getTokenScopes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GcpSecretRolesetBinding <a name="GcpSecretRolesetBinding" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.Initializer"></a>

```java
import io.cdktn.providers.vault.gcp_secret_roleset.GcpSecretRolesetBinding;

GcpSecretRolesetBinding.builder()
    .resource(java.lang.String)
    .roles(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.property.resource">resource</a></code> | <code>java.lang.String</code> | Resource name. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | List of roles to apply to the resource. |

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

Resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#resource GcpSecretRoleset#resource}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

List of roles to apply to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#roles GcpSecretRoleset#roles}

---

### GcpSecretRolesetConfig <a name="GcpSecretRolesetConfig" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.gcp_secret_roleset.GcpSecretRolesetConfig;

GcpSecretRolesetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
    .binding(IResolvable|java.util.List<GcpSecretRolesetBinding>)
    .project(java.lang.String)
    .roleset(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .secretType(java.lang.String)
//  .tokenScopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Path where the GCP secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.binding">binding</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>></code> | binding block. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.project">project</a></code> | <code>java.lang.String</code> | Name of the GCP project that this roleset's service account will belong to. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.roleset">roleset</a></code> | <code>java.lang.String</code> | Name of the RoleSet to create. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#id GcpSecretRoleset#id}. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.secretType">secretType</a></code> | <code>java.lang.String</code> | Type of secret generated for this role set. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.tokenScopes">tokenScopes</a></code> | <code>java.util.List<java.lang.String></code> | List of OAuth scopes to assign to `access_token` secrets generated under this role set (`access_token` role sets only). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Path where the GCP secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#backend GcpSecretRoleset#backend}

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.binding"></a>

```java
public IResolvable|java.util.List<GcpSecretRolesetBinding> getBinding();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>>

binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#binding GcpSecretRoleset#binding}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Name of the GCP project that this roleset's service account will belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#project GcpSecretRoleset#project}

---

##### `roleset`<sup>Required</sup> <a name="roleset" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.roleset"></a>

```java
public java.lang.String getRoleset();
```

- *Type:* java.lang.String

Name of the RoleSet to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#roleset GcpSecretRoleset#roleset}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#id GcpSecretRoleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#namespace GcpSecretRoleset#namespace}

---

##### `secretType`<sup>Optional</sup> <a name="secretType" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.secretType"></a>

```java
public java.lang.String getSecretType();
```

- *Type:* java.lang.String

Type of secret generated for this role set. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#secret_type GcpSecretRoleset#secret_type}

---

##### `tokenScopes`<sup>Optional</sup> <a name="tokenScopes" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.tokenScopes"></a>

```java
public java.util.List<java.lang.String> getTokenScopes();
```

- *Type:* java.util.List<java.lang.String>

List of OAuth scopes to assign to `access_token` secrets generated under this role set (`access_token` role sets only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/gcp_secret_roleset#token_scopes GcpSecretRoleset#token_scopes}

---

## Classes <a name="Classes" id="Classes"></a>

### GcpSecretRolesetBindingList <a name="GcpSecretRolesetBindingList" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer"></a>

```java
import io.cdktn.providers.vault.gcp_secret_roleset.GcpSecretRolesetBindingList;

new GcpSecretRolesetBindingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.get"></a>

```java
public GcpSecretRolesetBindingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GcpSecretRolesetBinding> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>>

---


### GcpSecretRolesetBindingOutputReference <a name="GcpSecretRolesetBindingOutputReference" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.vault.gcp_secret_roleset.GcpSecretRolesetBindingOutputReference;

new GcpSecretRolesetBindingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.rolesInput">rolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.rolesInput"></a>

```java
public java.util.List<java.lang.String> getRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.internalValue"></a>

```java
public IResolvable|GcpSecretRolesetBinding getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>

---



