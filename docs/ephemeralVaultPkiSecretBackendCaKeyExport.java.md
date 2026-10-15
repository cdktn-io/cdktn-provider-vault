# `ephemeralVaultPkiSecretBackendCaKeyExport` Submodule <a name="`ephemeralVaultPkiSecretBackendCaKeyExport` Submodule" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultPkiSecretBackendCaKeyExport <a name="EphemeralVaultPkiSecretBackendCaKeyExport" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export vault_pki_secret_backend_ca_key_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_pki_secret_backend_ca_key_export.EphemeralVaultPkiSecretBackendCaKeyExport;

EphemeralVaultPkiSecretBackendCaKeyExport.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .caKeyUuid(java.lang.String)
    .mount(java.lang.String)
    .publicKey(java.lang.String)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.caKeyUuid">caKeyUuid</a></code> | <code>java.lang.String</code> | UUID of the CA key to export from the source mount. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path of the source PKI secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.publicKey">publicKey</a></code> | <code>java.lang.String</code> | PEM-encoded public key of the destination wrapping keypair. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `caKeyUuid`<sup>Required</sup> <a name="caKeyUuid" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.caKeyUuid"></a>

- *Type:* java.lang.String

UUID of the CA key to export from the source mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#ca_key_uuid EphemeralVaultPkiSecretBackendCaKeyExport#ca_key_uuid}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path of the source PKI secrets engine mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#mount EphemeralVaultPkiSecretBackendCaKeyExport#mount}

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.publicKey"></a>

- *Type:* java.lang.String

PEM-encoded public key of the destination wrapping keypair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#public_key EphemeralVaultPkiSecretBackendCaKeyExport#public_key}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.mountId"></a>

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#mount_id EphemeralVaultPkiSecretBackendCaKeyExport#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#namespace EphemeralVaultPkiSecretBackendCaKeyExport#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetMountId"></a>

```java
public void resetMountId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isConstruct"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_pki_secret_backend_ca_key_export.EphemeralVaultPkiSecretBackendCaKeyExport;

EphemeralVaultPkiSecretBackendCaKeyExport.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_pki_secret_backend_ca_key_export.EphemeralVaultPkiSecretBackendCaKeyExport;

EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_pki_secret_backend_ca_key_export.EphemeralVaultPkiSecretBackendCaKeyExport;

EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportedAt">exportedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportKeyHmac">exportKeyHmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.wrappedKey">wrappedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuidInput">caKeyUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountIdInput">mountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKeyInput">publicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuid">caKeyUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountId">mountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `exportedAt`<sup>Required</sup> <a name="exportedAt" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportedAt"></a>

```java
public java.lang.String getExportedAt();
```

- *Type:* java.lang.String

---

##### `exportKeyHmac`<sup>Required</sup> <a name="exportKeyHmac" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportKeyHmac"></a>

```java
public java.lang.String getExportKeyHmac();
```

- *Type:* java.lang.String

---

##### `wrappedKey`<sup>Required</sup> <a name="wrappedKey" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.wrappedKey"></a>

```java
public java.lang.String getWrappedKey();
```

- *Type:* java.lang.String

---

##### `caKeyUuidInput`<sup>Optional</sup> <a name="caKeyUuidInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuidInput"></a>

```java
public java.lang.String getCaKeyUuidInput();
```

- *Type:* java.lang.String

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountIdInput"></a>

```java
public java.lang.String getMountIdInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKeyInput"></a>

```java
public java.lang.String getPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `caKeyUuid`<sup>Required</sup> <a name="caKeyUuid" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuid"></a>

```java
public java.lang.String getCaKeyUuid();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultPkiSecretBackendCaKeyExportConfig <a name="EphemeralVaultPkiSecretBackendCaKeyExportConfig" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_pki_secret_backend_ca_key_export.EphemeralVaultPkiSecretBackendCaKeyExportConfig;

EphemeralVaultPkiSecretBackendCaKeyExportConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .caKeyUuid(java.lang.String)
    .mount(java.lang.String)
    .publicKey(java.lang.String)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.caKeyUuid">caKeyUuid</a></code> | <code>java.lang.String</code> | UUID of the CA key to export from the source mount. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path of the source PKI secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | PEM-encoded public key of the destination wrapping keypair. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `caKeyUuid`<sup>Required</sup> <a name="caKeyUuid" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.caKeyUuid"></a>

```java
public java.lang.String getCaKeyUuid();
```

- *Type:* java.lang.String

UUID of the CA key to export from the source mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#ca_key_uuid EphemeralVaultPkiSecretBackendCaKeyExport#ca_key_uuid}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path of the source PKI secrets engine mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#mount EphemeralVaultPkiSecretBackendCaKeyExport#mount}

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

PEM-encoded public key of the destination wrapping keypair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#public_key EphemeralVaultPkiSecretBackendCaKeyExport#public_key}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#mount_id EphemeralVaultPkiSecretBackendCaKeyExport#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#namespace EphemeralVaultPkiSecretBackendCaKeyExport#namespace}

---



