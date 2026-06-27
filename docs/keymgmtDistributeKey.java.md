# `keymgmtDistributeKey` Submodule <a name="`keymgmtDistributeKey` Submodule" id="@cdktn/provider-vault.keymgmtDistributeKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeymgmtDistributeKey <a name="KeymgmtDistributeKey" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key vault_keymgmt_distribute_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer"></a>

```java
import io.cdktn.providers.vault.keymgmt_distribute_key.KeymgmtDistributeKey;

KeymgmtDistributeKey.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keyName(java.lang.String)
    .kmsName(java.lang.String)
    .mount(java.lang.String)
    .purpose(java.util.List<java.lang.String>)
//  .namespace(java.lang.String)
//  .protection(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.keyName">keyName</a></code> | <code>java.lang.String</code> | Specifies the name of the key to distribute to the given KMS provider. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.kmsName">kmsName</a></code> | <code>java.lang.String</code> | Specifies the name of the KMS provider to distribute the given key to. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path of the Key Management secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.purpose">purpose</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the purpose of the key. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.protection">protection</a></code> | <code>java.lang.String</code> | Specifies the protection of the key. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.keyName"></a>

- *Type:* java.lang.String

Specifies the name of the key to distribute to the given KMS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#key_name KeymgmtDistributeKey#key_name}

---

##### `kmsName`<sup>Required</sup> <a name="kmsName" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.kmsName"></a>

- *Type:* java.lang.String

Specifies the name of the KMS provider to distribute the given key to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#kms_name KeymgmtDistributeKey#kms_name}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path of the Key Management secrets engine mount.

Must match the `path` of a `vault_mount` resource with `type = "keymgmt"`. Use `vault_mount.keymgmt.path` here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#mount KeymgmtDistributeKey#mount}

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.purpose"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the purpose of the key.

The purpose defines a set of cryptographic capabilities that the key will have in the KMS provider. A key must have at least one of the supported purposes. The following values are supported : encrypt, decrypt, sign, verify, wrap, unwrap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#purpose KeymgmtDistributeKey#purpose}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#namespace KeymgmtDistributeKey#namespace}

---

##### `protection`<sup>Optional</sup> <a name="protection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.protection"></a>

- *Type:* java.lang.String

Specifies the protection of the key.

The protection defines where cryptographic operations are performed with the key in the KMS provider. The following values are supported: hsm, software. Defaults to `hsm`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#protection KeymgmtDistributeKey#protection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.resetProtection">resetProtection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetProtection` <a name="resetProtection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.resetProtection"></a>

```java
public void resetProtection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KeymgmtDistributeKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isConstruct"></a>

```java
import io.cdktn.providers.vault.keymgmt_distribute_key.KeymgmtDistributeKey;

KeymgmtDistributeKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.keymgmt_distribute_key.KeymgmtDistributeKey;

KeymgmtDistributeKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.keymgmt_distribute_key.KeymgmtDistributeKey;

KeymgmtDistributeKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.keymgmt_distribute_key.KeymgmtDistributeKey;

KeymgmtDistributeKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KeymgmtDistributeKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KeymgmtDistributeKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KeymgmtDistributeKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KeymgmtDistributeKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KeymgmtDistributeKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.versions">versions</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.kmsNameInput">kmsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.protectionInput">protectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.purposeInput">purposeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.kmsName">kmsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.protection">protection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.purpose">purpose</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.versions"></a>

```java
public StringMap getVersions();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsNameInput`<sup>Optional</sup> <a name="kmsNameInput" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.kmsNameInput"></a>

```java
public java.lang.String getKmsNameInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `protectionInput`<sup>Optional</sup> <a name="protectionInput" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.protectionInput"></a>

```java
public java.lang.String getProtectionInput();
```

- *Type:* java.lang.String

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.purposeInput"></a>

```java
public java.util.List<java.lang.String> getPurposeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `kmsName`<sup>Required</sup> <a name="kmsName" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.kmsName"></a>

```java
public java.lang.String getKmsName();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `protection`<sup>Required</sup> <a name="protection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.protection"></a>

```java
public java.lang.String getProtection();
```

- *Type:* java.lang.String

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.purpose"></a>

```java
public java.util.List<java.lang.String> getPurpose();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KeymgmtDistributeKeyConfig <a name="KeymgmtDistributeKeyConfig" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.keymgmt_distribute_key.KeymgmtDistributeKeyConfig;

KeymgmtDistributeKeyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keyName(java.lang.String)
    .kmsName(java.lang.String)
    .mount(java.lang.String)
    .purpose(java.util.List<java.lang.String>)
//  .namespace(java.lang.String)
//  .protection(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Specifies the name of the key to distribute to the given KMS provider. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.kmsName">kmsName</a></code> | <code>java.lang.String</code> | Specifies the name of the KMS provider to distribute the given key to. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path of the Key Management secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.purpose">purpose</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the purpose of the key. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.protection">protection</a></code> | <code>java.lang.String</code> | Specifies the protection of the key. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Specifies the name of the key to distribute to the given KMS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#key_name KeymgmtDistributeKey#key_name}

---

##### `kmsName`<sup>Required</sup> <a name="kmsName" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.kmsName"></a>

```java
public java.lang.String getKmsName();
```

- *Type:* java.lang.String

Specifies the name of the KMS provider to distribute the given key to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#kms_name KeymgmtDistributeKey#kms_name}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path of the Key Management secrets engine mount.

Must match the `path` of a `vault_mount` resource with `type = "keymgmt"`. Use `vault_mount.keymgmt.path` here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#mount KeymgmtDistributeKey#mount}

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.purpose"></a>

```java
public java.util.List<java.lang.String> getPurpose();
```

- *Type:* java.util.List<java.lang.String>

Specifies the purpose of the key.

The purpose defines a set of cryptographic capabilities that the key will have in the KMS provider. A key must have at least one of the supported purposes. The following values are supported : encrypt, decrypt, sign, verify, wrap, unwrap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#purpose KeymgmtDistributeKey#purpose}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#namespace KeymgmtDistributeKey#namespace}

---

##### `protection`<sup>Optional</sup> <a name="protection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.protection"></a>

```java
public java.lang.String getProtection();
```

- *Type:* java.lang.String

Specifies the protection of the key.

The protection defines where cryptographic operations are performed with the key in the KMS provider. The following values are supported: hsm, software. Defaults to `hsm`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#protection KeymgmtDistributeKey#protection}

---



