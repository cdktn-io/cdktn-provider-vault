# `identityOidcKeyAllowedClientId` Submodule <a name="`identityOidcKeyAllowedClientId` Submodule" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityOidcKeyAllowedClientId <a name="IdentityOidcKeyAllowedClientId" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/identity_oidc_key_allowed_client_id vault_identity_oidc_key_allowed_client_id}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer"></a>

```java
import io.cdktn.providers.vault.identity_oidc_key_allowed_client_id.IdentityOidcKeyAllowedClientId;

IdentityOidcKeyAllowedClientId.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .allowedClientId(java.lang.String)
    .keyName(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.allowedClientId">allowedClientId</a></code> | <code>java.lang.String</code> | Role Client ID allowed to use the key for signing. |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.keyName">keyName</a></code> | <code>java.lang.String</code> | Name of the key. |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/identity_oidc_key_allowed_client_id#id IdentityOidcKeyAllowedClientId#id}. |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowedClientId`<sup>Required</sup> <a name="allowedClientId" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.allowedClientId"></a>

- *Type:* java.lang.String

Role Client ID allowed to use the key for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/identity_oidc_key_allowed_client_id#allowed_client_id IdentityOidcKeyAllowedClientId#allowed_client_id}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.keyName"></a>

- *Type:* java.lang.String

Name of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/identity_oidc_key_allowed_client_id#key_name IdentityOidcKeyAllowedClientId#key_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/identity_oidc_key_allowed_client_id#id IdentityOidcKeyAllowedClientId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/identity_oidc_key_allowed_client_id#namespace IdentityOidcKeyAllowedClientId#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IdentityOidcKeyAllowedClientId resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isConstruct"></a>

```java
import io.cdktn.providers.vault.identity_oidc_key_allowed_client_id.IdentityOidcKeyAllowedClientId;

IdentityOidcKeyAllowedClientId.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.identity_oidc_key_allowed_client_id.IdentityOidcKeyAllowedClientId;

IdentityOidcKeyAllowedClientId.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.identity_oidc_key_allowed_client_id.IdentityOidcKeyAllowedClientId;

IdentityOidcKeyAllowedClientId.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.identity_oidc_key_allowed_client_id.IdentityOidcKeyAllowedClientId;

IdentityOidcKeyAllowedClientId.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityOidcKeyAllowedClientId.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IdentityOidcKeyAllowedClientId resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityOidcKeyAllowedClientId to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityOidcKeyAllowedClientId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/identity_oidc_key_allowed_client_id#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IdentityOidcKeyAllowedClientId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.allowedClientIdInput">allowedClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.allowedClientId">allowedClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowedClientIdInput`<sup>Optional</sup> <a name="allowedClientIdInput" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.allowedClientIdInput"></a>

```java
public java.lang.String getAllowedClientIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `allowedClientId`<sup>Required</sup> <a name="allowedClientId" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.allowedClientId"></a>

```java
public java.lang.String getAllowedClientId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityOidcKeyAllowedClientIdConfig <a name="IdentityOidcKeyAllowedClientIdConfig" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.identity_oidc_key_allowed_client_id.IdentityOidcKeyAllowedClientIdConfig;

IdentityOidcKeyAllowedClientIdConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .allowedClientId(java.lang.String)
    .keyName(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.allowedClientId">allowedClientId</a></code> | <code>java.lang.String</code> | Role Client ID allowed to use the key for signing. |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Name of the key. |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/identity_oidc_key_allowed_client_id#id IdentityOidcKeyAllowedClientId#id}. |
| <code><a href="#@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowedClientId`<sup>Required</sup> <a name="allowedClientId" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.allowedClientId"></a>

```java
public java.lang.String getAllowedClientId();
```

- *Type:* java.lang.String

Role Client ID allowed to use the key for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/identity_oidc_key_allowed_client_id#allowed_client_id IdentityOidcKeyAllowedClientId#allowed_client_id}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Name of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/identity_oidc_key_allowed_client_id#key_name IdentityOidcKeyAllowedClientId#key_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/identity_oidc_key_allowed_client_id#id IdentityOidcKeyAllowedClientId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/identity_oidc_key_allowed_client_id#namespace IdentityOidcKeyAllowedClientId#namespace}

---



