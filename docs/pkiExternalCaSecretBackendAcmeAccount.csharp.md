# `pkiExternalCaSecretBackendAcmeAccount` Submodule <a name="`pkiExternalCaSecretBackendAcmeAccount` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendAcmeAccount <a name="PkiExternalCaSecretBackendAcmeAccount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account vault_pki_external_ca_secret_backend_acme_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new PkiExternalCaSecretBackendAcmeAccount(Construct Scope, string Id, PkiExternalCaSecretBackendAcmeAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig">PkiExternalCaSecretBackendAcmeAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig">PkiExternalCaSecretBackendAcmeAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetEabKey">ResetEabKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetEabKid">ResetEabKid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetTrustedCa">ResetTrustedCa</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEabKey` <a name="ResetEabKey" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetEabKey"></a>

```csharp
private void ResetEabKey()
```

##### `ResetEabKid` <a name="ResetEabKid" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetEabKid"></a>

```csharp
private void ResetEabKid()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetKeyType"></a>

```csharp
private void ResetKeyType()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTrustedCa` <a name="ResetTrustedCa" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.resetTrustedCa"></a>

```csharp
private void ResetTrustedCa()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendAcmeAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendAcmeAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendAcmeAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendAcmeAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendAcmeAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendAcmeAccount resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiExternalCaSecretBackendAcmeAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiExternalCaSecretBackendAcmeAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendAcmeAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.activeKeyVersion">ActiveKeyVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.directoryUrlInput">DirectoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.eabKeyInput">EabKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.eabKidInput">EabKidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.emailContactsInput">EmailContactsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.keyTypeInput">KeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.trustedCaInput">TrustedCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.directoryUrl">DirectoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.eabKey">EabKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.eabKid">EabKid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.emailContacts">EmailContacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.trustedCa">TrustedCa</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActiveKeyVersion`<sup>Required</sup> <a name="ActiveKeyVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.activeKeyVersion"></a>

```csharp
public double ActiveKeyVersion { get; }
```

- *Type:* double

---

##### `DirectoryUrlInput`<sup>Optional</sup> <a name="DirectoryUrlInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.directoryUrlInput"></a>

```csharp
public string DirectoryUrlInput { get; }
```

- *Type:* string

---

##### `EabKeyInput`<sup>Optional</sup> <a name="EabKeyInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.eabKeyInput"></a>

```csharp
public string EabKeyInput { get; }
```

- *Type:* string

---

##### `EabKidInput`<sup>Optional</sup> <a name="EabKidInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.eabKidInput"></a>

```csharp
public string EabKidInput { get; }
```

- *Type:* string

---

##### `EmailContactsInput`<sup>Optional</sup> <a name="EmailContactsInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.emailContactsInput"></a>

```csharp
public string[] EmailContactsInput { get; }
```

- *Type:* string[]

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.keyTypeInput"></a>

```csharp
public string KeyTypeInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TrustedCaInput`<sup>Optional</sup> <a name="TrustedCaInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.trustedCaInput"></a>

```csharp
public string TrustedCaInput { get; }
```

- *Type:* string

---

##### `DirectoryUrl`<sup>Required</sup> <a name="DirectoryUrl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.directoryUrl"></a>

```csharp
public string DirectoryUrl { get; }
```

- *Type:* string

---

##### `EabKey`<sup>Required</sup> <a name="EabKey" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.eabKey"></a>

```csharp
public string EabKey { get; }
```

- *Type:* string

---

##### `EabKid`<sup>Required</sup> <a name="EabKid" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.eabKid"></a>

```csharp
public string EabKid { get; }
```

- *Type:* string

---

##### `EmailContacts`<sup>Required</sup> <a name="EmailContacts" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.emailContacts"></a>

```csharp
public string[] EmailContacts { get; }
```

- *Type:* string[]

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `TrustedCa`<sup>Required</sup> <a name="TrustedCa" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.trustedCa"></a>

```csharp
public string TrustedCa { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendAcmeAccountConfig <a name="PkiExternalCaSecretBackendAcmeAccountConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new PkiExternalCaSecretBackendAcmeAccountConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DirectoryUrl,
    string[] EmailContacts,
    string Mount,
    string Name,
    string EabKey = null,
    string EabKid = null,
    string KeyType = null,
    string Namespace = null,
    string TrustedCa = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.directoryUrl">DirectoryUrl</a></code> | <code>string</code> | ACME Directory URL. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.emailContacts">EmailContacts</a></code> | <code>string[]</code> | Email addresses for the ACME account. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.mount">Mount</a></code> | <code>string</code> | The path where the PKI secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.name">Name</a></code> | <code>string</code> | Name of the ACME account. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.eabKey">EabKey</a></code> | <code>string</code> | An url base64 encoded external binding token to create the initial account. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.eabKid">EabKid</a></code> | <code>string</code> | The external binding key ID to create the initial account. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.keyType">KeyType</a></code> | <code>string</code> | Key type to generate for the account key. Valid values are `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`, `rsa-8192`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.trustedCa">TrustedCa</a></code> | <code>string</code> | Trusted CA certificates for the ACME server. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DirectoryUrl`<sup>Required</sup> <a name="DirectoryUrl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.directoryUrl"></a>

```csharp
public string DirectoryUrl { get; set; }
```

- *Type:* string

ACME Directory URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#directory_url PkiExternalCaSecretBackendAcmeAccount#directory_url}

---

##### `EmailContacts`<sup>Required</sup> <a name="EmailContacts" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.emailContacts"></a>

```csharp
public string[] EmailContacts { get; set; }
```

- *Type:* string[]

Email addresses for the ACME account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#email_contacts PkiExternalCaSecretBackendAcmeAccount#email_contacts}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the PKI secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#mount PkiExternalCaSecretBackendAcmeAccount#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the ACME account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#name PkiExternalCaSecretBackendAcmeAccount#name}

---

##### `EabKey`<sup>Optional</sup> <a name="EabKey" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.eabKey"></a>

```csharp
public string EabKey { get; set; }
```

- *Type:* string

An url base64 encoded external binding token to create the initial account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#eab_key PkiExternalCaSecretBackendAcmeAccount#eab_key}

---

##### `EabKid`<sup>Optional</sup> <a name="EabKid" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.eabKid"></a>

```csharp
public string EabKid { get; set; }
```

- *Type:* string

The external binding key ID to create the initial account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#eab_kid PkiExternalCaSecretBackendAcmeAccount#eab_kid}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.keyType"></a>

```csharp
public string KeyType { get; set; }
```

- *Type:* string

Key type to generate for the account key. Valid values are `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`, `rsa-8192`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#key_type PkiExternalCaSecretBackendAcmeAccount#key_type}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#namespace PkiExternalCaSecretBackendAcmeAccount#namespace}

---

##### `TrustedCa`<sup>Optional</sup> <a name="TrustedCa" id="@cdktn/provider-vault.pkiExternalCaSecretBackendAcmeAccount.PkiExternalCaSecretBackendAcmeAccountConfig.property.trustedCa"></a>

```csharp
public string TrustedCa { get; set; }
```

- *Type:* string

Trusted CA certificates for the ACME server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_acme_account#trusted_ca PkiExternalCaSecretBackendAcmeAccount#trusted_ca}

---



