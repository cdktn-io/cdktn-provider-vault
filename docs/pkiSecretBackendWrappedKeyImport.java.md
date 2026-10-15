# `pkiSecretBackendWrappedKeyImport` Submodule <a name="`pkiSecretBackendWrappedKeyImport` Submodule" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendWrappedKeyImport <a name="PkiSecretBackendWrappedKeyImport" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import vault_pki_secret_backend_wrapped_key_import}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer"></a>

```java
import io.cdktn.providers.vault.pki_secret_backend_wrapped_key_import.PkiSecretBackendWrappedKeyImport;

PkiSecretBackendWrappedKeyImport.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .exportKeyHmac(java.lang.String)
    .mount(java.lang.String)
    .wrappedKey(java.lang.String)
//  .keyName(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.exportKeyHmac">exportKeyHmac</a></code> | <code>java.lang.String</code> | HMAC fingerprint of the wrapping key used to encrypt the blob. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path of the destination PKI secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.wrappedKey">wrappedKey</a></code> | <code>java.lang.String</code> | Base64-encoded wrapped CA private key blob. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.keyName">keyName</a></code> | <code>java.lang.String</code> | Human-readable name for the imported key in Vault. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `exportKeyHmac`<sup>Required</sup> <a name="exportKeyHmac" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.exportKeyHmac"></a>

- *Type:* java.lang.String

HMAC fingerprint of the wrapping key used to encrypt the blob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#export_key_hmac PkiSecretBackendWrappedKeyImport#export_key_hmac}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path of the destination PKI secrets engine mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#mount PkiSecretBackendWrappedKeyImport#mount}

---

##### `wrappedKey`<sup>Required</sup> <a name="wrappedKey" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.wrappedKey"></a>

- *Type:* java.lang.String

Base64-encoded wrapped CA private key blob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#wrapped_key PkiSecretBackendWrappedKeyImport#wrapped_key}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.keyName"></a>

- *Type:* java.lang.String

Human-readable name for the imported key in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#key_name PkiSecretBackendWrappedKeyImport#key_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#namespace PkiSecretBackendWrappedKeyImport#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetKeyName` <a name="resetKeyName" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetKeyName"></a>

```java
public void resetKeyName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PkiSecretBackendWrappedKeyImport resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isConstruct"></a>

```java
import io.cdktn.providers.vault.pki_secret_backend_wrapped_key_import.PkiSecretBackendWrappedKeyImport;

PkiSecretBackendWrappedKeyImport.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.pki_secret_backend_wrapped_key_import.PkiSecretBackendWrappedKeyImport;

PkiSecretBackendWrappedKeyImport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.pki_secret_backend_wrapped_key_import.PkiSecretBackendWrappedKeyImport;

PkiSecretBackendWrappedKeyImport.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.pki_secret_backend_wrapped_key_import.PkiSecretBackendWrappedKeyImport;

PkiSecretBackendWrappedKeyImport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PkiSecretBackendWrappedKeyImport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PkiSecretBackendWrappedKeyImport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PkiSecretBackendWrappedKeyImport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PkiSecretBackendWrappedKeyImport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendWrappedKeyImport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmacInput">exportKeyHmacInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKeyInput">wrappedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmac">exportKeyHmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKey">wrappedKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `exportKeyHmacInput`<sup>Optional</sup> <a name="exportKeyHmacInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmacInput"></a>

```java
public java.lang.String getExportKeyHmacInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `wrappedKeyInput`<sup>Optional</sup> <a name="wrappedKeyInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKeyInput"></a>

```java
public java.lang.String getWrappedKeyInput();
```

- *Type:* java.lang.String

---

##### ~~`exportKeyHmac`~~<sup>Required</sup> <a name="exportKeyHmac" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmac"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getExportKeyHmac();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### ~~`wrappedKey`~~<sup>Required</sup> <a name="wrappedKey" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKey"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getWrappedKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendWrappedKeyImportConfig <a name="PkiSecretBackendWrappedKeyImportConfig" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.pki_secret_backend_wrapped_key_import.PkiSecretBackendWrappedKeyImportConfig;

PkiSecretBackendWrappedKeyImportConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .exportKeyHmac(java.lang.String)
    .mount(java.lang.String)
    .wrappedKey(java.lang.String)
//  .keyName(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.exportKeyHmac">exportKeyHmac</a></code> | <code>java.lang.String</code> | HMAC fingerprint of the wrapping key used to encrypt the blob. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path of the destination PKI secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.wrappedKey">wrappedKey</a></code> | <code>java.lang.String</code> | Base64-encoded wrapped CA private key blob. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Human-readable name for the imported key in Vault. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `exportKeyHmac`<sup>Required</sup> <a name="exportKeyHmac" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.exportKeyHmac"></a>

```java
public java.lang.String getExportKeyHmac();
```

- *Type:* java.lang.String

HMAC fingerprint of the wrapping key used to encrypt the blob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#export_key_hmac PkiSecretBackendWrappedKeyImport#export_key_hmac}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path of the destination PKI secrets engine mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#mount PkiSecretBackendWrappedKeyImport#mount}

---

##### `wrappedKey`<sup>Required</sup> <a name="wrappedKey" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.wrappedKey"></a>

```java
public java.lang.String getWrappedKey();
```

- *Type:* java.lang.String

Base64-encoded wrapped CA private key blob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#wrapped_key PkiSecretBackendWrappedKeyImport#wrapped_key}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Human-readable name for the imported key in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#key_name PkiSecretBackendWrappedKeyImport#key_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#namespace PkiSecretBackendWrappedKeyImport#namespace}

---



