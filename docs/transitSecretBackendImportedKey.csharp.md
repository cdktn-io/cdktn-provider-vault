# `transitSecretBackendImportedKey` Submodule <a name="`transitSecretBackendImportedKey` Submodule" id="@cdktn/provider-vault.transitSecretBackendImportedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransitSecretBackendImportedKey <a name="TransitSecretBackendImportedKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key vault_transit_secret_backend_imported_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new TransitSecretBackendImportedKey(Construct Scope, string Id, TransitSecretBackendImportedKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig">TransitSecretBackendImportedKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig">TransitSecretBackendImportedKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowPlaintextBackup">ResetAllowPlaintextBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowRotation">ResetAllowRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAutoRotatePeriod">ResetAutoRotatePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWo">ResetCiphertextWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWoVersion">ResetCiphertextWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDeletionAllowed">ResetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDerived">ResetDerived</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetExportable">ResetExportable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetHashFunction">ResetHashFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetImportVersionType">ResetImportVersionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinDecryptionVersion">ResetMinDecryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinEncryptionVersion">ResetMinEncryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetPublicKey">ResetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowPlaintextBackup` <a name="ResetAllowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowPlaintextBackup"></a>

```csharp
private void ResetAllowPlaintextBackup()
```

##### `ResetAllowRotation` <a name="ResetAllowRotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowRotation"></a>

```csharp
private void ResetAllowRotation()
```

##### `ResetAutoRotatePeriod` <a name="ResetAutoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAutoRotatePeriod"></a>

```csharp
private void ResetAutoRotatePeriod()
```

##### `ResetCiphertextWo` <a name="ResetCiphertextWo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWo"></a>

```csharp
private void ResetCiphertextWo()
```

##### `ResetCiphertextWoVersion` <a name="ResetCiphertextWoVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWoVersion"></a>

```csharp
private void ResetCiphertextWoVersion()
```

##### `ResetContext` <a name="ResetContext" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetContext"></a>

```csharp
private void ResetContext()
```

##### `ResetDeletionAllowed` <a name="ResetDeletionAllowed" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDeletionAllowed"></a>

```csharp
private void ResetDeletionAllowed()
```

##### `ResetDerived` <a name="ResetDerived" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDerived"></a>

```csharp
private void ResetDerived()
```

##### `ResetExportable` <a name="ResetExportable" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetExportable"></a>

```csharp
private void ResetExportable()
```

##### `ResetHashFunction` <a name="ResetHashFunction" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetHashFunction"></a>

```csharp
private void ResetHashFunction()
```

##### `ResetImportVersionType` <a name="ResetImportVersionType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetImportVersionType"></a>

```csharp
private void ResetImportVersionType()
```

##### `ResetMinDecryptionVersion` <a name="ResetMinDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinDecryptionVersion"></a>

```csharp
private void ResetMinDecryptionVersion()
```

##### `ResetMinEncryptionVersion` <a name="ResetMinEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinEncryptionVersion"></a>

```csharp
private void ResetMinEncryptionVersion()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetPublicKey"></a>

```csharp
private void ResetPublicKey()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransitSecretBackendImportedKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransitSecretBackendImportedKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransitSecretBackendImportedKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransitSecretBackendImportedKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransitSecretBackendImportedKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TransitSecretBackendImportedKey resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransitSecretBackendImportedKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransitSecretBackendImportedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TransitSecretBackendImportedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKey">ImportedKey</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKeyAllowRotation">ImportedKeyAllowRotation</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.keys">Keys</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersion">LatestVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersionType">LatestVersionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minAvailableVersion">MinAvailableVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDecryption">SupportsDecryption</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDerivation">SupportsDerivation</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsEncryption">SupportsEncryption</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsSigning">SupportsSigning</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackupInput">AllowPlaintextBackupInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotationInput">AllowRotationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriodInput">AutoRotatePeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoInput">CiphertextWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersionInput">CiphertextWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.contextInput">ContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowedInput">DeletionAllowedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derivedInput">DerivedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportableInput">ExportableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunctionInput">HashFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionTypeInput">ImportVersionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersionInput">MinDecryptionVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersionInput">MinEncryptionVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackup">AllowPlaintextBackup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotation">AllowRotation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriod">AutoRotatePeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWo">CiphertextWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersion">CiphertextWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.context">Context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowed">DeletionAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derived">Derived</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportable">Exportable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunction">HashFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionType">ImportVersionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersion">MinDecryptionVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersion">MinEncryptionVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.version">Version</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ImportedKey`<sup>Required</sup> <a name="ImportedKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKey"></a>

```csharp
public IResolvable ImportedKey { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ImportedKeyAllowRotation`<sup>Required</sup> <a name="ImportedKeyAllowRotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKeyAllowRotation"></a>

```csharp
public IResolvable ImportedKeyAllowRotation { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.keys"></a>

```csharp
public StringMap Keys { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersion"></a>

```csharp
public double LatestVersion { get; }
```

- *Type:* double

---

##### `LatestVersionType`<sup>Required</sup> <a name="LatestVersionType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersionType"></a>

```csharp
public string LatestVersionType { get; }
```

- *Type:* string

---

##### `MinAvailableVersion`<sup>Required</sup> <a name="MinAvailableVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minAvailableVersion"></a>

```csharp
public double MinAvailableVersion { get; }
```

- *Type:* double

---

##### `SupportsDecryption`<sup>Required</sup> <a name="SupportsDecryption" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDecryption"></a>

```csharp
public IResolvable SupportsDecryption { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SupportsDerivation`<sup>Required</sup> <a name="SupportsDerivation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDerivation"></a>

```csharp
public IResolvable SupportsDerivation { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SupportsEncryption`<sup>Required</sup> <a name="SupportsEncryption" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsEncryption"></a>

```csharp
public IResolvable SupportsEncryption { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SupportsSigning`<sup>Required</sup> <a name="SupportsSigning" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsSigning"></a>

```csharp
public IResolvable SupportsSigning { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AllowPlaintextBackupInput`<sup>Optional</sup> <a name="AllowPlaintextBackupInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackupInput"></a>

```csharp
public bool|IResolvable AllowPlaintextBackupInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowRotationInput`<sup>Optional</sup> <a name="AllowRotationInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotationInput"></a>

```csharp
public bool|IResolvable AllowRotationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoRotatePeriodInput`<sup>Optional</sup> <a name="AutoRotatePeriodInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriodInput"></a>

```csharp
public double AutoRotatePeriodInput { get; }
```

- *Type:* double

---

##### `CiphertextWoInput`<sup>Optional</sup> <a name="CiphertextWoInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoInput"></a>

```csharp
public string CiphertextWoInput { get; }
```

- *Type:* string

---

##### `CiphertextWoVersionInput`<sup>Optional</sup> <a name="CiphertextWoVersionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersionInput"></a>

```csharp
public double CiphertextWoVersionInput { get; }
```

- *Type:* double

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.contextInput"></a>

```csharp
public string ContextInput { get; }
```

- *Type:* string

---

##### `DeletionAllowedInput`<sup>Optional</sup> <a name="DeletionAllowedInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowedInput"></a>

```csharp
public bool|IResolvable DeletionAllowedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DerivedInput`<sup>Optional</sup> <a name="DerivedInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derivedInput"></a>

```csharp
public bool|IResolvable DerivedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExportableInput`<sup>Optional</sup> <a name="ExportableInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportableInput"></a>

```csharp
public bool|IResolvable ExportableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HashFunctionInput`<sup>Optional</sup> <a name="HashFunctionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunctionInput"></a>

```csharp
public string HashFunctionInput { get; }
```

- *Type:* string

---

##### `ImportVersionTypeInput`<sup>Optional</sup> <a name="ImportVersionTypeInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionTypeInput"></a>

```csharp
public string ImportVersionTypeInput { get; }
```

- *Type:* string

---

##### `MinDecryptionVersionInput`<sup>Optional</sup> <a name="MinDecryptionVersionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersionInput"></a>

```csharp
public double MinDecryptionVersionInput { get; }
```

- *Type:* double

---

##### `MinEncryptionVersionInput`<sup>Optional</sup> <a name="MinEncryptionVersionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersionInput"></a>

```csharp
public double MinEncryptionVersionInput { get; }
```

- *Type:* double

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `AllowPlaintextBackup`<sup>Required</sup> <a name="AllowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackup"></a>

```csharp
public bool|IResolvable AllowPlaintextBackup { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowRotation`<sup>Required</sup> <a name="AllowRotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotation"></a>

```csharp
public bool|IResolvable AllowRotation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoRotatePeriod`<sup>Required</sup> <a name="AutoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriod"></a>

```csharp
public double AutoRotatePeriod { get; }
```

- *Type:* double

---

##### ~~`CiphertextWo`~~<sup>Required</sup> <a name="CiphertextWo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string CiphertextWo { get; }
```

- *Type:* string

---

##### `CiphertextWoVersion`<sup>Required</sup> <a name="CiphertextWoVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersion"></a>

```csharp
public double CiphertextWoVersion { get; }
```

- *Type:* double

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.context"></a>

```csharp
public string Context { get; }
```

- *Type:* string

---

##### `DeletionAllowed`<sup>Required</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowed"></a>

```csharp
public bool|IResolvable DeletionAllowed { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Derived`<sup>Required</sup> <a name="Derived" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derived"></a>

```csharp
public bool|IResolvable Derived { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Exportable`<sup>Required</sup> <a name="Exportable" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportable"></a>

```csharp
public bool|IResolvable Exportable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HashFunction`<sup>Required</sup> <a name="HashFunction" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunction"></a>

```csharp
public string HashFunction { get; }
```

- *Type:* string

---

##### `ImportVersionType`<sup>Required</sup> <a name="ImportVersionType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionType"></a>

```csharp
public string ImportVersionType { get; }
```

- *Type:* string

---

##### `MinDecryptionVersion`<sup>Required</sup> <a name="MinDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersion"></a>

```csharp
public double MinDecryptionVersion { get; }
```

- *Type:* double

---

##### `MinEncryptionVersion`<sup>Required</sup> <a name="MinEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersion"></a>

```csharp
public double MinEncryptionVersion { get; }
```

- *Type:* double

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransitSecretBackendImportedKeyConfig <a name="TransitSecretBackendImportedKeyConfig" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new TransitSecretBackendImportedKeyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Mount,
    string Name,
    string Type,
    bool|IResolvable AllowPlaintextBackup = null,
    bool|IResolvable AllowRotation = null,
    double AutoRotatePeriod = null,
    string CiphertextWo = null,
    double CiphertextWoVersion = null,
    string Context = null,
    bool|IResolvable DeletionAllowed = null,
    bool|IResolvable Derived = null,
    bool|IResolvable Exportable = null,
    string HashFunction = null,
    string ImportVersionType = null,
    double MinDecryptionVersion = null,
    double MinEncryptionVersion = null,
    string Namespace = null,
    string PublicKey = null,
    double Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.mount">Mount</a></code> | <code>string</code> | Path where the Transit secret backend is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.name">Name</a></code> | <code>string</code> | Name of the encryption key to create. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.type">Type</a></code> | <code>string</code> | Specifies the type of key to create (e.g. `aes128-gcm96`, `aes256-gcm96`, `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `hmac`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`). Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowPlaintextBackup">AllowPlaintextBackup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set, enables taking backup of named key in plaintext format. Once enabled, cannot be disabled. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowRotation">AllowRotation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set, the imported key can be rotated within Vault by using the rotate endpoint. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.autoRotatePeriod">AutoRotatePeriod</a></code> | <code>double</code> | The period in seconds at which this key should be rotated automatically. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWo">CiphertextWo</a></code> | <code>string</code> | A base64-encoded string containing the wrapped ephemeral AES key and the encrypted key material (write-only). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWoVersion">CiphertextWoVersion</a></code> | <code>double</code> | Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.context">Context</a></code> | <code>string</code> | A base64-encoded string providing a context for key derivation. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.deletionAllowed">DeletionAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies if the key is allowed to be deleted. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.derived">Derived</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies if key derivation is to be used. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.exportable">Exportable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables keys to be exportable. Once enabled, cannot be disabled. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.hashFunction">HashFunction</a></code> | <code>string</code> | The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.importVersionType">ImportVersionType</a></code> | <code>string</code> | Changes the key type of the new key version when importing key material into an existing key. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minDecryptionVersion">MinDecryptionVersion</a></code> | <code>double</code> | Minimum key version to use for decryption. Vault always sets this to at least 1. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minEncryptionVersion">MinEncryptionVersion</a></code> | <code>double</code> | Minimum key version to use for encryption. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.publicKey">PublicKey</a></code> | <code>string</code> | A plaintext PEM public key to be imported. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.version">Version</a></code> | <code>double</code> | Specifies the existing key version to update when importing key material to an already-imported key. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path where the Transit secret backend is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#mount TransitSecretBackendImportedKey#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the encryption key to create. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#name TransitSecretBackendImportedKey#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Specifies the type of key to create (e.g. `aes128-gcm96`, `aes256-gcm96`, `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `hmac`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`). Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#type TransitSecretBackendImportedKey#type}

---

##### `AllowPlaintextBackup`<sup>Optional</sup> <a name="AllowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowPlaintextBackup"></a>

```csharp
public bool|IResolvable AllowPlaintextBackup { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set, enables taking backup of named key in plaintext format. Once enabled, cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#allow_plaintext_backup TransitSecretBackendImportedKey#allow_plaintext_backup}

---

##### `AllowRotation`<sup>Optional</sup> <a name="AllowRotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowRotation"></a>

```csharp
public bool|IResolvable AllowRotation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set, the imported key can be rotated within Vault by using the rotate endpoint.

Once the key is rotated in Vault, it no longer accepts imported key material. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#allow_rotation TransitSecretBackendImportedKey#allow_rotation}

---

##### `AutoRotatePeriod`<sup>Optional</sup> <a name="AutoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.autoRotatePeriod"></a>

```csharp
public double AutoRotatePeriod { get; set; }
```

- *Type:* double

The period in seconds at which this key should be rotated automatically.

Set to 0 to disable; otherwise it must be at least one hour (3600).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#auto_rotate_period TransitSecretBackendImportedKey#auto_rotate_period}

---

##### `CiphertextWo`<sup>Optional</sup> <a name="CiphertextWo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWo"></a>

```csharp
public string CiphertextWo { get; set; }
```

- *Type:* string

A base64-encoded string containing the wrapped ephemeral AES key and the encrypted key material (write-only).

Required with `ciphertext_wo_version`. Vault requires either this or `public_key` for the initial import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#ciphertext_wo TransitSecretBackendImportedKey#ciphertext_wo}

---

##### `CiphertextWoVersion`<sup>Optional</sup> <a name="CiphertextWoVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWoVersion"></a>

```csharp
public double CiphertextWoVersion { get; set; }
```

- *Type:* double

Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#ciphertext_wo_version TransitSecretBackendImportedKey#ciphertext_wo_version}

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.context"></a>

```csharp
public string Context { get; set; }
```

- *Type:* string

A base64-encoded string providing a context for key derivation.

Required if `derived` is true. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#context TransitSecretBackendImportedKey#context}

---

##### `DeletionAllowed`<sup>Optional</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.deletionAllowed"></a>

```csharp
public bool|IResolvable DeletionAllowed { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies if the key is allowed to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#deletion_allowed TransitSecretBackendImportedKey#deletion_allowed}

---

##### `Derived`<sup>Optional</sup> <a name="Derived" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.derived"></a>

```csharp
public bool|IResolvable Derived { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies if key derivation is to be used. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#derived TransitSecretBackendImportedKey#derived}

---

##### `Exportable`<sup>Optional</sup> <a name="Exportable" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.exportable"></a>

```csharp
public bool|IResolvable Exportable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables keys to be exportable. Once enabled, cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#exportable TransitSecretBackendImportedKey#exportable}

---

##### `HashFunction`<sup>Optional</sup> <a name="HashFunction" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.hashFunction"></a>

```csharp
public string HashFunction { get; set; }
```

- *Type:* string

The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`).

Vault uses `SHA256` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#hash_function TransitSecretBackendImportedKey#hash_function}

---

##### `ImportVersionType`<sup>Optional</sup> <a name="ImportVersionType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.importVersionType"></a>

```csharp
public string ImportVersionType { get; set; }
```

- *Type:* string

Changes the key type of the new key version when importing key material into an existing key.

Sent as `type` to Vault's import key version endpoint, so it has no effect on the initial import. Reported by `latest_version_type`. Requires Vault Enterprise 2.2.0 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#import_version_type TransitSecretBackendImportedKey#import_version_type}

---

##### `MinDecryptionVersion`<sup>Optional</sup> <a name="MinDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minDecryptionVersion"></a>

```csharp
public double MinDecryptionVersion { get; set; }
```

- *Type:* double

Minimum key version to use for decryption. Vault always sets this to at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#min_decryption_version TransitSecretBackendImportedKey#min_decryption_version}

---

##### `MinEncryptionVersion`<sup>Optional</sup> <a name="MinEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minEncryptionVersion"></a>

```csharp
public double MinEncryptionVersion { get; set; }
```

- *Type:* double

Minimum key version to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#min_encryption_version TransitSecretBackendImportedKey#min_encryption_version}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#namespace TransitSecretBackendImportedKey#namespace}

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

A plaintext PEM public key to be imported.

Vault requires either this or `ciphertext_wo` for the initial import. Changing it imports the new public key as a new key version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#public_key TransitSecretBackendImportedKey#public_key}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

Specifies the existing key version to update when importing key material to an already-imported key.

If omitted, Vault creates a new version, except when the latest version contains only a public key and the request supplies its matching private key; in that case Vault adds the private key to the existing, latest version. Ignored when the key is first imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#version TransitSecretBackendImportedKey#version}

---



