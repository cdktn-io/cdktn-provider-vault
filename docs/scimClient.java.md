# `scimClient` Submodule <a name="`scimClient` Submodule" id="@cdktn/provider-vault.scimClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ScimClient <a name="ScimClient" id="@cdktn/provider-vault.scimClient.ScimClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client vault_scim_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer"></a>

```java
import io.cdktn.providers.vault.scim_client.ScimClient;

ScimClient.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessGrantPrincipal(java.lang.String)
    .clientName(java.lang.String)
//  .aliasMountAccessor(java.lang.String)
//  .allowedExtraAliasMountAccessors(java.util.List<java.lang.String>)
//  .allowGroupAdoption(java.lang.Boolean|IResolvable)
//  .allowUserAdoption(java.lang.Boolean|IResolvable)
//  .defaultSchemaVersion(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .maxActiveTokens(java.lang.Number)
//  .maxTokenTtl(java.lang.Number)
//  .namespace(java.lang.String)
//  .timeouts(ScimClientTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.accessGrantPrincipal">accessGrantPrincipal</a></code> | <code>java.lang.String</code> | Entity ID authorized to call SCIM protocol endpoints on behalf of this client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.clientName">clientName</a></code> | <code>java.lang.String</code> | The name of the SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.aliasMountAccessor">aliasMountAccessor</a></code> | <code>java.lang.String</code> | Auth mount accessor used to create entity aliases for SCIM users. Immutable after creation. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.allowedExtraAliasMountAccessors">allowedExtraAliasMountAccessors</a></code> | <code>java.util.List<java.lang.String></code> | Additional mount accessors whose aliases may be managed by this SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.allowGroupAdoption">allowGroupAdoption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to allow adoption of existing Vault groups by SCIM-provisioned groups. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.allowUserAdoption">allowUserAdoption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to allow adoption of existing Vault entities by SCIM users. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.defaultSchemaVersion">defaultSchemaVersion</a></code> | <code>java.lang.String</code> | The Vault SCIM extension schema version used for this client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Controls how linked entities/groups/aliases are handled when this resource is destroyed. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#id ScimClient#id}. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.maxActiveTokens">maxActiveTokens</a></code> | <code>java.lang.Number</code> | Maximum number of active tokens for this SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.maxTokenTtl">maxTokenTtl</a></code> | <code>java.lang.Number</code> | Maximum TTL (in seconds) for tokens issued to this SCIM client. Zero means the cluster default is used. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessGrantPrincipal`<sup>Required</sup> <a name="accessGrantPrincipal" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.accessGrantPrincipal"></a>

- *Type:* java.lang.String

Entity ID authorized to call SCIM protocol endpoints on behalf of this client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#access_grant_principal ScimClient#access_grant_principal}

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.clientName"></a>

- *Type:* java.lang.String

The name of the SCIM client.

Must be lowercase, because Vault lowercases client names when it stores them. May contain only letters, digits, '*', '-' and '.', and must start and end with a letter, digit or '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#client_name ScimClient#client_name}

---

##### `aliasMountAccessor`<sup>Optional</sup> <a name="aliasMountAccessor" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.aliasMountAccessor"></a>

- *Type:* java.lang.String

Auth mount accessor used to create entity aliases for SCIM users. Immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#alias_mount_accessor ScimClient#alias_mount_accessor}

---

##### `allowedExtraAliasMountAccessors`<sup>Optional</sup> <a name="allowedExtraAliasMountAccessors" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.allowedExtraAliasMountAccessors"></a>

- *Type:* java.util.List<java.lang.String>

Additional mount accessors whose aliases may be managed by this SCIM client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allowed_extra_alias_mount_accessors ScimClient#allowed_extra_alias_mount_accessors}

---

##### `allowGroupAdoption`<sup>Optional</sup> <a name="allowGroupAdoption" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.allowGroupAdoption"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to allow adoption of existing Vault groups by SCIM-provisioned groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allow_group_adoption ScimClient#allow_group_adoption}

---

##### `allowUserAdoption`<sup>Optional</sup> <a name="allowUserAdoption" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.allowUserAdoption"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to allow adoption of existing Vault entities by SCIM users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allow_user_adoption ScimClient#allow_user_adoption}

---

##### `defaultSchemaVersion`<sup>Optional</sup> <a name="defaultSchemaVersion" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.defaultSchemaVersion"></a>

- *Type:* java.lang.String

The Vault SCIM extension schema version used for this client.

Must be "2.0" or "2.2". Leave unset to use Vault's default for new clients ("2.2").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#default_schema_version ScimClient#default_schema_version}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Controls how linked entities/groups/aliases are handled when this resource is destroyed.

`orphan_child_resources` detaches managed resources without deleting them; `delete_child_resources` deletes all managed resources along with the client. Leave unset for a plain delete (fails if the client still owns linked resources). Only consulted at destroy time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#deletion_policy ScimClient#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#id ScimClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxActiveTokens`<sup>Optional</sup> <a name="maxActiveTokens" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.maxActiveTokens"></a>

- *Type:* java.lang.Number

Maximum number of active tokens for this SCIM client.

Must be a positive non-zero value. Leave unset to use Vault's default (2).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#max_active_tokens ScimClient#max_active_tokens}

---

##### `maxTokenTtl`<sup>Optional</sup> <a name="maxTokenTtl" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.maxTokenTtl"></a>

- *Type:* java.lang.Number

Maximum TTL (in seconds) for tokens issued to this SCIM client. Zero means the cluster default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#max_token_ttl ScimClient#max_token_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#namespace ScimClient#namespace}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#timeouts ScimClient#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAliasMountAccessor">resetAliasMountAccessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAllowedExtraAliasMountAccessors">resetAllowedExtraAliasMountAccessors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAllowGroupAdoption">resetAllowGroupAdoption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAllowUserAdoption">resetAllowUserAdoption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetDefaultSchemaVersion">resetDefaultSchemaVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetMaxActiveTokens">resetMaxActiveTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetMaxTokenTtl">resetMaxTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.scimClient.ScimClient.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.scimClient.ScimClient.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.scimClient.ScimClient.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.scimClient.ScimClient.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.scimClient.ScimClient.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.scimClient.ScimClient.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.scimClient.ScimClient.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.scimClient.ScimClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.scimClient.ScimClient.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.scimClient.ScimClient.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.scimClient.ScimClient.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.scimClient.ScimClient.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.scimClient.ScimClient.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.scimClient.ScimClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.scimClient.ScimClient.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.scimClient.ScimClient.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.scimClient.ScimClient.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.scimClient.ScimClient.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.scimClient.ScimClient.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.scimClient.ScimClient.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.scimClient.ScimClient.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.scimClient.ScimClient.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-vault.scimClient.ScimClient.putTimeouts"></a>

```java
public void putTimeouts(ScimClientTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.scimClient.ScimClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

---

##### `resetAliasMountAccessor` <a name="resetAliasMountAccessor" id="@cdktn/provider-vault.scimClient.ScimClient.resetAliasMountAccessor"></a>

```java
public void resetAliasMountAccessor()
```

##### `resetAllowedExtraAliasMountAccessors` <a name="resetAllowedExtraAliasMountAccessors" id="@cdktn/provider-vault.scimClient.ScimClient.resetAllowedExtraAliasMountAccessors"></a>

```java
public void resetAllowedExtraAliasMountAccessors()
```

##### `resetAllowGroupAdoption` <a name="resetAllowGroupAdoption" id="@cdktn/provider-vault.scimClient.ScimClient.resetAllowGroupAdoption"></a>

```java
public void resetAllowGroupAdoption()
```

##### `resetAllowUserAdoption` <a name="resetAllowUserAdoption" id="@cdktn/provider-vault.scimClient.ScimClient.resetAllowUserAdoption"></a>

```java
public void resetAllowUserAdoption()
```

##### `resetDefaultSchemaVersion` <a name="resetDefaultSchemaVersion" id="@cdktn/provider-vault.scimClient.ScimClient.resetDefaultSchemaVersion"></a>

```java
public void resetDefaultSchemaVersion()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-vault.scimClient.ScimClient.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.scimClient.ScimClient.resetId"></a>

```java
public void resetId()
```

##### `resetMaxActiveTokens` <a name="resetMaxActiveTokens" id="@cdktn/provider-vault.scimClient.ScimClient.resetMaxActiveTokens"></a>

```java
public void resetMaxActiveTokens()
```

##### `resetMaxTokenTtl` <a name="resetMaxTokenTtl" id="@cdktn/provider-vault.scimClient.ScimClient.resetMaxTokenTtl"></a>

```java
public void resetMaxTokenTtl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.scimClient.ScimClient.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-vault.scimClient.ScimClient.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ScimClient resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.scimClient.ScimClient.isConstruct"></a>

```java
import io.cdktn.providers.vault.scim_client.ScimClient;

ScimClient.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.scimClient.ScimClient.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.scim_client.ScimClient;

ScimClient.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.scim_client.ScimClient;

ScimClient.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.scim_client.ScimClient;

ScimClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ScimClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ScimClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ScimClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ScimClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ScimClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.deleting">deleting</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference">ScimClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipalInput">accessGrantPrincipalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessorInput">aliasMountAccessorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessorsInput">allowedExtraAliasMountAccessorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoptionInput">allowGroupAdoptionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoptionInput">allowUserAdoptionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.clientNameInput">clientNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersionInput">defaultSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokensInput">maxActiveTokensInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtlInput">maxTokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipal">accessGrantPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessor">aliasMountAccessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessors">allowedExtraAliasMountAccessors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoption">allowGroupAdoption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoption">allowUserAdoption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.clientName">clientName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersion">defaultSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokens">maxActiveTokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtl">maxTokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.scimClient.ScimClient.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.scimClient.ScimClient.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.scimClient.ScimClient.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.scimClient.ScimClient.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.scimClient.ScimClient.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.scimClient.ScimClient.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.scimClient.ScimClient.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.scimClient.ScimClient.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.scimClient.ScimClient.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.scimClient.ScimClient.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.scimClient.ScimClient.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.scimClient.ScimClient.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.scimClient.ScimClient.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.scimClient.ScimClient.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-vault.scimClient.ScimClient.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `deleting`<sup>Required</sup> <a name="deleting" id="@cdktn/provider-vault.scimClient.ScimClient.property.deleting"></a>

```java
public IResolvable getDeleting();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-vault.scimClient.ScimClient.property.timeouts"></a>

```java
public ScimClientTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference">ScimClientTimeoutsOutputReference</a>

---

##### `accessGrantPrincipalInput`<sup>Optional</sup> <a name="accessGrantPrincipalInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipalInput"></a>

```java
public java.lang.String getAccessGrantPrincipalInput();
```

- *Type:* java.lang.String

---

##### `aliasMountAccessorInput`<sup>Optional</sup> <a name="aliasMountAccessorInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessorInput"></a>

```java
public java.lang.String getAliasMountAccessorInput();
```

- *Type:* java.lang.String

---

##### `allowedExtraAliasMountAccessorsInput`<sup>Optional</sup> <a name="allowedExtraAliasMountAccessorsInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessorsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedExtraAliasMountAccessorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowGroupAdoptionInput`<sup>Optional</sup> <a name="allowGroupAdoptionInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoptionInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowGroupAdoptionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowUserAdoptionInput`<sup>Optional</sup> <a name="allowUserAdoptionInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoptionInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowUserAdoptionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `clientNameInput`<sup>Optional</sup> <a name="clientNameInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.clientNameInput"></a>

```java
public java.lang.String getClientNameInput();
```

- *Type:* java.lang.String

---

##### `defaultSchemaVersionInput`<sup>Optional</sup> <a name="defaultSchemaVersionInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersionInput"></a>

```java
public java.lang.String getDefaultSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxActiveTokensInput`<sup>Optional</sup> <a name="maxActiveTokensInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokensInput"></a>

```java
public java.lang.Number getMaxActiveTokensInput();
```

- *Type:* java.lang.Number

---

##### `maxTokenTtlInput`<sup>Optional</sup> <a name="maxTokenTtlInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtlInput"></a>

```java
public java.lang.Number getMaxTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.timeoutsInput"></a>

```java
public IResolvable|ScimClientTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

---

##### `accessGrantPrincipal`<sup>Required</sup> <a name="accessGrantPrincipal" id="@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipal"></a>

```java
public java.lang.String getAccessGrantPrincipal();
```

- *Type:* java.lang.String

---

##### `aliasMountAccessor`<sup>Required</sup> <a name="aliasMountAccessor" id="@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessor"></a>

```java
public java.lang.String getAliasMountAccessor();
```

- *Type:* java.lang.String

---

##### `allowedExtraAliasMountAccessors`<sup>Required</sup> <a name="allowedExtraAliasMountAccessors" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessors"></a>

```java
public java.util.List<java.lang.String> getAllowedExtraAliasMountAccessors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowGroupAdoption`<sup>Required</sup> <a name="allowGroupAdoption" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoption"></a>

```java
public java.lang.Boolean|IResolvable getAllowGroupAdoption();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowUserAdoption`<sup>Required</sup> <a name="allowUserAdoption" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoption"></a>

```java
public java.lang.Boolean|IResolvable getAllowUserAdoption();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-vault.scimClient.ScimClient.property.clientName"></a>

```java
public java.lang.String getClientName();
```

- *Type:* java.lang.String

---

##### `defaultSchemaVersion`<sup>Required</sup> <a name="defaultSchemaVersion" id="@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersion"></a>

```java
public java.lang.String getDefaultSchemaVersion();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxActiveTokens`<sup>Required</sup> <a name="maxActiveTokens" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokens"></a>

```java
public java.lang.Number getMaxActiveTokens();
```

- *Type:* java.lang.Number

---

##### `maxTokenTtl`<sup>Required</sup> <a name="maxTokenTtl" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtl"></a>

```java
public java.lang.Number getMaxTokenTtl();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.scimClient.ScimClient.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.scimClient.ScimClient.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ScimClientConfig <a name="ScimClientConfig" id="@cdktn/provider-vault.scimClient.ScimClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.scimClient.ScimClientConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.scim_client.ScimClientConfig;

ScimClientConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessGrantPrincipal(java.lang.String)
    .clientName(java.lang.String)
//  .aliasMountAccessor(java.lang.String)
//  .allowedExtraAliasMountAccessors(java.util.List<java.lang.String>)
//  .allowGroupAdoption(java.lang.Boolean|IResolvable)
//  .allowUserAdoption(java.lang.Boolean|IResolvable)
//  .defaultSchemaVersion(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .maxActiveTokens(java.lang.Number)
//  .maxTokenTtl(java.lang.Number)
//  .namespace(java.lang.String)
//  .timeouts(ScimClientTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.accessGrantPrincipal">accessGrantPrincipal</a></code> | <code>java.lang.String</code> | Entity ID authorized to call SCIM protocol endpoints on behalf of this client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.clientName">clientName</a></code> | <code>java.lang.String</code> | The name of the SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.aliasMountAccessor">aliasMountAccessor</a></code> | <code>java.lang.String</code> | Auth mount accessor used to create entity aliases for SCIM users. Immutable after creation. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowedExtraAliasMountAccessors">allowedExtraAliasMountAccessors</a></code> | <code>java.util.List<java.lang.String></code> | Additional mount accessors whose aliases may be managed by this SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowGroupAdoption">allowGroupAdoption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to allow adoption of existing Vault groups by SCIM-provisioned groups. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowUserAdoption">allowUserAdoption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to allow adoption of existing Vault entities by SCIM users. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.defaultSchemaVersion">defaultSchemaVersion</a></code> | <code>java.lang.String</code> | The Vault SCIM extension schema version used for this client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Controls how linked entities/groups/aliases are handled when this resource is destroyed. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#id ScimClient#id}. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxActiveTokens">maxActiveTokens</a></code> | <code>java.lang.Number</code> | Maximum number of active tokens for this SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxTokenTtl">maxTokenTtl</a></code> | <code>java.lang.Number</code> | Maximum TTL (in seconds) for tokens issued to this SCIM client. Zero means the cluster default is used. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessGrantPrincipal`<sup>Required</sup> <a name="accessGrantPrincipal" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.accessGrantPrincipal"></a>

```java
public java.lang.String getAccessGrantPrincipal();
```

- *Type:* java.lang.String

Entity ID authorized to call SCIM protocol endpoints on behalf of this client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#access_grant_principal ScimClient#access_grant_principal}

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.clientName"></a>

```java
public java.lang.String getClientName();
```

- *Type:* java.lang.String

The name of the SCIM client.

Must be lowercase, because Vault lowercases client names when it stores them. May contain only letters, digits, '*', '-' and '.', and must start and end with a letter, digit or '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#client_name ScimClient#client_name}

---

##### `aliasMountAccessor`<sup>Optional</sup> <a name="aliasMountAccessor" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.aliasMountAccessor"></a>

```java
public java.lang.String getAliasMountAccessor();
```

- *Type:* java.lang.String

Auth mount accessor used to create entity aliases for SCIM users. Immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#alias_mount_accessor ScimClient#alias_mount_accessor}

---

##### `allowedExtraAliasMountAccessors`<sup>Optional</sup> <a name="allowedExtraAliasMountAccessors" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowedExtraAliasMountAccessors"></a>

```java
public java.util.List<java.lang.String> getAllowedExtraAliasMountAccessors();
```

- *Type:* java.util.List<java.lang.String>

Additional mount accessors whose aliases may be managed by this SCIM client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allowed_extra_alias_mount_accessors ScimClient#allowed_extra_alias_mount_accessors}

---

##### `allowGroupAdoption`<sup>Optional</sup> <a name="allowGroupAdoption" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowGroupAdoption"></a>

```java
public java.lang.Boolean|IResolvable getAllowGroupAdoption();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to allow adoption of existing Vault groups by SCIM-provisioned groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allow_group_adoption ScimClient#allow_group_adoption}

---

##### `allowUserAdoption`<sup>Optional</sup> <a name="allowUserAdoption" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowUserAdoption"></a>

```java
public java.lang.Boolean|IResolvable getAllowUserAdoption();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to allow adoption of existing Vault entities by SCIM users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allow_user_adoption ScimClient#allow_user_adoption}

---

##### `defaultSchemaVersion`<sup>Optional</sup> <a name="defaultSchemaVersion" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.defaultSchemaVersion"></a>

```java
public java.lang.String getDefaultSchemaVersion();
```

- *Type:* java.lang.String

The Vault SCIM extension schema version used for this client.

Must be "2.0" or "2.2". Leave unset to use Vault's default for new clients ("2.2").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#default_schema_version ScimClient#default_schema_version}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Controls how linked entities/groups/aliases are handled when this resource is destroyed.

`orphan_child_resources` detaches managed resources without deleting them; `delete_child_resources` deletes all managed resources along with the client. Leave unset for a plain delete (fails if the client still owns linked resources). Only consulted at destroy time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#deletion_policy ScimClient#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#id ScimClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxActiveTokens`<sup>Optional</sup> <a name="maxActiveTokens" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxActiveTokens"></a>

```java
public java.lang.Number getMaxActiveTokens();
```

- *Type:* java.lang.Number

Maximum number of active tokens for this SCIM client.

Must be a positive non-zero value. Leave unset to use Vault's default (2).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#max_active_tokens ScimClient#max_active_tokens}

---

##### `maxTokenTtl`<sup>Optional</sup> <a name="maxTokenTtl" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxTokenTtl"></a>

```java
public java.lang.Number getMaxTokenTtl();
```

- *Type:* java.lang.Number

Maximum TTL (in seconds) for tokens issued to this SCIM client. Zero means the cluster default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#max_token_ttl ScimClient#max_token_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#namespace ScimClient#namespace}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.timeouts"></a>

```java
public ScimClientTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#timeouts ScimClient#timeouts}

---

### ScimClientTimeouts <a name="ScimClientTimeouts" id="@cdktn/provider-vault.scimClient.ScimClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.scimClient.ScimClientTimeouts.Initializer"></a>

```java
import io.cdktn.providers.vault.scim_client.ScimClientTimeouts;

ScimClientTimeouts.builder()
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#delete ScimClient#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-vault.scimClient.ScimClientTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#delete ScimClient#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ScimClientTimeoutsOutputReference <a name="ScimClientTimeoutsOutputReference" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.vault.scim_client.ScimClientTimeoutsOutputReference;

new ScimClientTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ScimClientTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

---



