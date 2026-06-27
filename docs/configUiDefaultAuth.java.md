# `configUiDefaultAuth` Submodule <a name="`configUiDefaultAuth` Submodule" id="@cdktn/provider-vault.configUiDefaultAuth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigUiDefaultAuth <a name="ConfigUiDefaultAuth" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth vault_config_ui_default_auth}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer"></a>

```java
import io.cdktn.providers.vault.config_ui_default_auth.ConfigUiDefaultAuth;

ConfigUiDefaultAuth.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .defaultAuthType(java.lang.String)
    .name(java.lang.String)
//  .backupAuthTypes(java.util.List<java.lang.String>)
//  .disableInheritance(java.lang.Boolean|IResolvable)
//  .namespace(java.lang.String)
//  .namespacePath(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.defaultAuthType">defaultAuthType</a></code> | <code>java.lang.String</code> | The default authentication method. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique identifier for the configuration. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.backupAuthTypes">backupAuthTypes</a></code> | <code>java.util.List<java.lang.String></code> | List of backup authentication methods. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.disableInheritance">disableInheritance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, child namespaces will not inherit default_auth_type and backup_auth_types from this configuration. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.namespacePath">namespacePath</a></code> | <code>java.lang.String</code> | Target namespace for the configuration. Empty string or omitted applies to root namespace. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultAuthType`<sup>Required</sup> <a name="defaultAuthType" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.defaultAuthType"></a>

- *Type:* java.lang.String

The default authentication method.

Uses `OneOf` validator to ensure only valid auth methods are accepted: github, jwt, ldap, oidc, okta, radius, saml, token, userpass.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#default_auth_type ConfigUiDefaultAuth#default_auth_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique identifier for the configuration.

Can contain letters, numbers, underscores, and dashes. Uses `RequiresReplace()` plan modifier - changing this forces resource recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#name ConfigUiDefaultAuth#name}

---

##### `backupAuthTypes`<sup>Optional</sup> <a name="backupAuthTypes" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.backupAuthTypes"></a>

- *Type:* java.util.List<java.lang.String>

List of backup authentication methods.

Uses `ListAttribute` with `ElementType: StringType` to preserve order of backup methods. Each must be a valid auth type. Vault presents these in the "Sign in with other methods" tab. **Note:** Removing this field from configuration will clear it in Vault by sending an empty array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#backup_auth_types ConfigUiDefaultAuth#backup_auth_types}

---

##### `disableInheritance`<sup>Optional</sup> <a name="disableInheritance" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.disableInheritance"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, child namespaces will not inherit default_auth_type and backup_auth_types from this configuration.

**Note:** Removing this field from configuration will reset it to `false` in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#disable_inheritance ConfigUiDefaultAuth#disable_inheritance}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#namespace ConfigUiDefaultAuth#namespace}

---

##### `namespacePath`<sup>Optional</sup> <a name="namespacePath" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.namespacePath"></a>

- *Type:* java.lang.String

Target namespace for the configuration. Empty string or omitted applies to root namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#namespace_path ConfigUiDefaultAuth#namespace_path}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetBackupAuthTypes">resetBackupAuthTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetDisableInheritance">resetDisableInheritance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespacePath">resetNamespacePath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBackupAuthTypes` <a name="resetBackupAuthTypes" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetBackupAuthTypes"></a>

```java
public void resetBackupAuthTypes()
```

##### `resetDisableInheritance` <a name="resetDisableInheritance" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetDisableInheritance"></a>

```java
public void resetDisableInheritance()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNamespacePath` <a name="resetNamespacePath" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespacePath"></a>

```java
public void resetNamespacePath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigUiDefaultAuth resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isConstruct"></a>

```java
import io.cdktn.providers.vault.config_ui_default_auth.ConfigUiDefaultAuth;

ConfigUiDefaultAuth.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.config_ui_default_auth.ConfigUiDefaultAuth;

ConfigUiDefaultAuth.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.config_ui_default_auth.ConfigUiDefaultAuth;

ConfigUiDefaultAuth.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.config_ui_default_auth.ConfigUiDefaultAuth;

ConfigUiDefaultAuth.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConfigUiDefaultAuth.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConfigUiDefaultAuth resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConfigUiDefaultAuth to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConfigUiDefaultAuth that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConfigUiDefaultAuth to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypesInput">backupAuthTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthTypeInput">defaultAuthTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritanceInput">disableInheritanceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePathInput">namespacePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypes">backupAuthTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthType">defaultAuthType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritance">disableInheritance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePath">namespacePath</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `backupAuthTypesInput`<sup>Optional</sup> <a name="backupAuthTypesInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypesInput"></a>

```java
public java.util.List<java.lang.String> getBackupAuthTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultAuthTypeInput`<sup>Optional</sup> <a name="defaultAuthTypeInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthTypeInput"></a>

```java
public java.lang.String getDefaultAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `disableInheritanceInput`<sup>Optional</sup> <a name="disableInheritanceInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritanceInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableInheritanceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `namespacePathInput`<sup>Optional</sup> <a name="namespacePathInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePathInput"></a>

```java
public java.lang.String getNamespacePathInput();
```

- *Type:* java.lang.String

---

##### `backupAuthTypes`<sup>Required</sup> <a name="backupAuthTypes" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypes"></a>

```java
public java.util.List<java.lang.String> getBackupAuthTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultAuthType`<sup>Required</sup> <a name="defaultAuthType" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthType"></a>

```java
public java.lang.String getDefaultAuthType();
```

- *Type:* java.lang.String

---

##### `disableInheritance`<sup>Required</sup> <a name="disableInheritance" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritance"></a>

```java
public java.lang.Boolean|IResolvable getDisableInheritance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `namespacePath`<sup>Required</sup> <a name="namespacePath" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePath"></a>

```java
public java.lang.String getNamespacePath();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigUiDefaultAuthConfig <a name="ConfigUiDefaultAuthConfig" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.config_ui_default_auth.ConfigUiDefaultAuthConfig;

ConfigUiDefaultAuthConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .defaultAuthType(java.lang.String)
    .name(java.lang.String)
//  .backupAuthTypes(java.util.List<java.lang.String>)
//  .disableInheritance(java.lang.Boolean|IResolvable)
//  .namespace(java.lang.String)
//  .namespacePath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.defaultAuthType">defaultAuthType</a></code> | <code>java.lang.String</code> | The default authentication method. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique identifier for the configuration. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.backupAuthTypes">backupAuthTypes</a></code> | <code>java.util.List<java.lang.String></code> | List of backup authentication methods. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.disableInheritance">disableInheritance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, child namespaces will not inherit default_auth_type and backup_auth_types from this configuration. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespacePath">namespacePath</a></code> | <code>java.lang.String</code> | Target namespace for the configuration. Empty string or omitted applies to root namespace. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultAuthType`<sup>Required</sup> <a name="defaultAuthType" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.defaultAuthType"></a>

```java
public java.lang.String getDefaultAuthType();
```

- *Type:* java.lang.String

The default authentication method.

Uses `OneOf` validator to ensure only valid auth methods are accepted: github, jwt, ldap, oidc, okta, radius, saml, token, userpass.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#default_auth_type ConfigUiDefaultAuth#default_auth_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique identifier for the configuration.

Can contain letters, numbers, underscores, and dashes. Uses `RequiresReplace()` plan modifier - changing this forces resource recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#name ConfigUiDefaultAuth#name}

---

##### `backupAuthTypes`<sup>Optional</sup> <a name="backupAuthTypes" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.backupAuthTypes"></a>

```java
public java.util.List<java.lang.String> getBackupAuthTypes();
```

- *Type:* java.util.List<java.lang.String>

List of backup authentication methods.

Uses `ListAttribute` with `ElementType: StringType` to preserve order of backup methods. Each must be a valid auth type. Vault presents these in the "Sign in with other methods" tab. **Note:** Removing this field from configuration will clear it in Vault by sending an empty array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#backup_auth_types ConfigUiDefaultAuth#backup_auth_types}

---

##### `disableInheritance`<sup>Optional</sup> <a name="disableInheritance" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.disableInheritance"></a>

```java
public java.lang.Boolean|IResolvable getDisableInheritance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, child namespaces will not inherit default_auth_type and backup_auth_types from this configuration.

**Note:** Removing this field from configuration will reset it to `false` in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#disable_inheritance ConfigUiDefaultAuth#disable_inheritance}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#namespace ConfigUiDefaultAuth#namespace}

---

##### `namespacePath`<sup>Optional</sup> <a name="namespacePath" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespacePath"></a>

```java
public java.lang.String getNamespacePath();
```

- *Type:* java.lang.String

Target namespace for the configuration. Empty string or omitted applies to root namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#namespace_path ConfigUiDefaultAuth#namespace_path}

---



