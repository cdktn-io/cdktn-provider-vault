# `alicloudSecretBackendRole` Submodule <a name="`alicloudSecretBackendRole` Submodule" id="@cdktn/provider-vault.alicloudSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlicloudSecretBackendRole <a name="AlicloudSecretBackendRole" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role vault_alicloud_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer"></a>

```java
import io.cdktn.providers.vault.alicloud_secret_backend_role.AlicloudSecretBackendRole;

AlicloudSecretBackendRole.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .inlinePolicies(IResolvable|java.util.List<AlicloudSecretBackendRoleInlinePolicies>)
//  .maxTtl(java.lang.Number)
//  .namespace(java.lang.String)
//  .remotePolicies(IResolvable|java.util.List<AlicloudSecretBackendRoleRemotePolicies>)
//  .roleArn(java.lang.String)
//  .ttl(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path of the AliCloud Secret Backend the role belongs to. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.inlinePolicies">inlinePolicies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>></code> | inline_policies block. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | The maximum allowed lifetime of credentials issued using this role. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.remotePolicies">remotePolicies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>></code> | remote_policies block. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | ARN of the RAM role to assume. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | Duration in seconds after which the issued credentials should expire. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path of the AliCloud Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#mount AlicloudSecretBackendRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#name AlicloudSecretBackendRole#name}

---

##### `inlinePolicies`<sup>Optional</sup> <a name="inlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.inlinePolicies"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>>

inline_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#inline_policies AlicloudSecretBackendRole#inline_policies}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.maxTtl"></a>

- *Type:* java.lang.Number

The maximum allowed lifetime of credentials issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#max_ttl AlicloudSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#namespace AlicloudSecretBackendRole#namespace}

---

##### `remotePolicies`<sup>Optional</sup> <a name="remotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.remotePolicies"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>>

remote_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#remote_policies AlicloudSecretBackendRole#remote_policies}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

ARN of the RAM role to assume.

If provided, inline_policies and remote_policies should be blank. The trusted principal of the role must be configured to allow assumption by the access key and secret configured in the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#role_arn AlicloudSecretBackendRole#role_arn}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

Duration in seconds after which the issued credentials should expire.

Defaults to 0, in which case the value will fallback to the system/mount defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#ttl AlicloudSecretBackendRole#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putInlinePolicies">putInlinePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putRemotePolicies">putRemotePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetInlinePolicies">resetInlinePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRemotePolicies">resetRemotePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInlinePolicies` <a name="putInlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putInlinePolicies"></a>

```java
public void putInlinePolicies(IResolvable|java.util.List<AlicloudSecretBackendRoleInlinePolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putInlinePolicies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>>

---

##### `putRemotePolicies` <a name="putRemotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putRemotePolicies"></a>

```java
public void putRemotePolicies(IResolvable|java.util.List<AlicloudSecretBackendRoleRemotePolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putRemotePolicies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>>

---

##### `resetInlinePolicies` <a name="resetInlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetInlinePolicies"></a>

```java
public void resetInlinePolicies()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRemotePolicies` <a name="resetRemotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRemotePolicies"></a>

```java
public void resetRemotePolicies()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AlicloudSecretBackendRole resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isConstruct"></a>

```java
import io.cdktn.providers.vault.alicloud_secret_backend_role.AlicloudSecretBackendRole;

AlicloudSecretBackendRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.alicloud_secret_backend_role.AlicloudSecretBackendRole;

AlicloudSecretBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.alicloud_secret_backend_role.AlicloudSecretBackendRole;

AlicloudSecretBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.alicloud_secret_backend_role.AlicloudSecretBackendRole;

AlicloudSecretBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AlicloudSecretBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AlicloudSecretBackendRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AlicloudSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AlicloudSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AlicloudSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePolicies">inlinePolicies</a></code> | <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList">AlicloudSecretBackendRoleInlinePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePolicies">remotePolicies</a></code> | <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList">AlicloudSecretBackendRoleRemotePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePoliciesInput">inlinePoliciesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePoliciesInput">remotePoliciesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `inlinePolicies`<sup>Required</sup> <a name="inlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePolicies"></a>

```java
public AlicloudSecretBackendRoleInlinePoliciesList getInlinePolicies();
```

- *Type:* <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList">AlicloudSecretBackendRoleInlinePoliciesList</a>

---

##### `remotePolicies`<sup>Required</sup> <a name="remotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePolicies"></a>

```java
public AlicloudSecretBackendRoleRemotePoliciesList getRemotePolicies();
```

- *Type:* <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList">AlicloudSecretBackendRoleRemotePoliciesList</a>

---

##### `inlinePoliciesInput`<sup>Optional</sup> <a name="inlinePoliciesInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePoliciesInput"></a>

```java
public IResolvable|java.util.List<AlicloudSecretBackendRoleInlinePolicies> getInlinePoliciesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>>

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtlInput"></a>

```java
public java.lang.Number getMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `remotePoliciesInput`<sup>Optional</sup> <a name="remotePoliciesInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePoliciesInput"></a>

```java
public IResolvable|java.util.List<AlicloudSecretBackendRoleRemotePolicies> getRemotePoliciesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AlicloudSecretBackendRoleConfig <a name="AlicloudSecretBackendRoleConfig" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.alicloud_secret_backend_role.AlicloudSecretBackendRoleConfig;

AlicloudSecretBackendRoleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .inlinePolicies(IResolvable|java.util.List<AlicloudSecretBackendRoleInlinePolicies>)
//  .maxTtl(java.lang.Number)
//  .namespace(java.lang.String)
//  .remotePolicies(IResolvable|java.util.List<AlicloudSecretBackendRoleRemotePolicies>)
//  .roleArn(java.lang.String)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path of the AliCloud Secret Backend the role belongs to. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.inlinePolicies">inlinePolicies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>></code> | inline_policies block. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | The maximum allowed lifetime of credentials issued using this role. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.remotePolicies">remotePolicies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>></code> | remote_policies block. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | ARN of the RAM role to assume. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Duration in seconds after which the issued credentials should expire. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path of the AliCloud Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#mount AlicloudSecretBackendRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#name AlicloudSecretBackendRole#name}

---

##### `inlinePolicies`<sup>Optional</sup> <a name="inlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.inlinePolicies"></a>

```java
public IResolvable|java.util.List<AlicloudSecretBackendRoleInlinePolicies> getInlinePolicies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>>

inline_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#inline_policies AlicloudSecretBackendRole#inline_policies}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

The maximum allowed lifetime of credentials issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#max_ttl AlicloudSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#namespace AlicloudSecretBackendRole#namespace}

---

##### `remotePolicies`<sup>Optional</sup> <a name="remotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.remotePolicies"></a>

```java
public IResolvable|java.util.List<AlicloudSecretBackendRoleRemotePolicies> getRemotePolicies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>>

remote_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#remote_policies AlicloudSecretBackendRole#remote_policies}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

ARN of the RAM role to assume.

If provided, inline_policies and remote_policies should be blank. The trusted principal of the role must be configured to allow assumption by the access key and secret configured in the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#role_arn AlicloudSecretBackendRole#role_arn}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Duration in seconds after which the issued credentials should expire.

Defaults to 0, in which case the value will fallback to the system/mount defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#ttl AlicloudSecretBackendRole#ttl}

---

### AlicloudSecretBackendRoleInlinePolicies <a name="AlicloudSecretBackendRoleInlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies.Initializer"></a>

```java
import io.cdktn.providers.vault.alicloud_secret_backend_role.AlicloudSecretBackendRoleInlinePolicies;

AlicloudSecretBackendRoleInlinePolicies.builder()
    .policyDocument(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | JSON-encoded inline policy document. |

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

JSON-encoded inline policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#policy_document AlicloudSecretBackendRole#policy_document}

---

### AlicloudSecretBackendRoleRemotePolicies <a name="AlicloudSecretBackendRoleRemotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.Initializer"></a>

```java
import io.cdktn.providers.vault.alicloud_secret_backend_role.AlicloudSecretBackendRoleRemotePolicies;

AlicloudSecretBackendRoleRemotePolicies.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.name">name</a></code> | <code>java.lang.String</code> | Name of the remote policy. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.type">type</a></code> | <code>java.lang.String</code> | Type of the remote policy (System or Custom). |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the remote policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#name AlicloudSecretBackendRole#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of the remote policy (System or Custom).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#type AlicloudSecretBackendRole#type}

---

## Classes <a name="Classes" id="Classes"></a>

### AlicloudSecretBackendRoleInlinePoliciesList <a name="AlicloudSecretBackendRoleInlinePoliciesList" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer"></a>

```java
import io.cdktn.providers.vault.alicloud_secret_backend_role.AlicloudSecretBackendRoleInlinePoliciesList;

new AlicloudSecretBackendRoleInlinePoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.get"></a>

```java
public AlicloudSecretBackendRoleInlinePoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AlicloudSecretBackendRoleInlinePolicies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>>

---


### AlicloudSecretBackendRoleInlinePoliciesOutputReference <a name="AlicloudSecretBackendRoleInlinePoliciesOutputReference" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.vault.alicloud_secret_backend_role.AlicloudSecretBackendRoleInlinePoliciesOutputReference;

new AlicloudSecretBackendRoleInlinePoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocumentInput">policyDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocumentInput"></a>

```java
public java.lang.String getPolicyDocumentInput();
```

- *Type:* java.lang.String

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.internalValue"></a>

```java
public IResolvable|AlicloudSecretBackendRoleInlinePolicies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>

---


### AlicloudSecretBackendRoleRemotePoliciesList <a name="AlicloudSecretBackendRoleRemotePoliciesList" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer"></a>

```java
import io.cdktn.providers.vault.alicloud_secret_backend_role.AlicloudSecretBackendRoleRemotePoliciesList;

new AlicloudSecretBackendRoleRemotePoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.get"></a>

```java
public AlicloudSecretBackendRoleRemotePoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AlicloudSecretBackendRoleRemotePolicies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>>

---


### AlicloudSecretBackendRoleRemotePoliciesOutputReference <a name="AlicloudSecretBackendRoleRemotePoliciesOutputReference" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.vault.alicloud_secret_backend_role.AlicloudSecretBackendRoleRemotePoliciesOutputReference;

new AlicloudSecretBackendRoleRemotePoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.internalValue"></a>

```java
public IResolvable|AlicloudSecretBackendRoleRemotePolicies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>

---



