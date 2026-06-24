# `samlAuthBackend` Submodule <a name="`samlAuthBackend` Submodule" id="@cdktn/provider-vault.samlAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlAuthBackend <a name="SamlAuthBackend" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend vault_saml_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new SamlAuthBackend(Construct Scope, string Id, SamlAuthBackendConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig">SamlAuthBackendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig">SamlAuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.putTune">PutTune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetDefaultRole">ResetDefaultRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpCert">ResetIdpCert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpEntityId">ResetIdpEntityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpMetadataUrl">ResetIdpMetadataUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpSsoUrl">ResetIdpSsoUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetTune">ResetTune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetValidateAssertionSignature">ResetValidateAssertionSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetValidateResponseSignature">ResetValidateResponseSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetVerboseLogging">ResetVerboseLogging</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTune` <a name="PutTune" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.putTune"></a>

```csharp
private void PutTune(IResolvable|SamlAuthBackendTune[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.putTune.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a>[]

---

##### `ResetDefaultRole` <a name="ResetDefaultRole" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetDefaultRole"></a>

```csharp
private void ResetDefaultRole()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetDisableRemount"></a>

```csharp
private void ResetDisableRemount()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdpCert` <a name="ResetIdpCert" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpCert"></a>

```csharp
private void ResetIdpCert()
```

##### `ResetIdpEntityId` <a name="ResetIdpEntityId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpEntityId"></a>

```csharp
private void ResetIdpEntityId()
```

##### `ResetIdpMetadataUrl` <a name="ResetIdpMetadataUrl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpMetadataUrl"></a>

```csharp
private void ResetIdpMetadataUrl()
```

##### `ResetIdpSsoUrl` <a name="ResetIdpSsoUrl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpSsoUrl"></a>

```csharp
private void ResetIdpSsoUrl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetTune` <a name="ResetTune" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetTune"></a>

```csharp
private void ResetTune()
```

##### `ResetValidateAssertionSignature` <a name="ResetValidateAssertionSignature" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetValidateAssertionSignature"></a>

```csharp
private void ResetValidateAssertionSignature()
```

##### `ResetValidateResponseSignature` <a name="ResetValidateResponseSignature" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetValidateResponseSignature"></a>

```csharp
private void ResetValidateResponseSignature()
```

##### `ResetVerboseLogging` <a name="ResetVerboseLogging" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetVerboseLogging"></a>

```csharp
private void ResetVerboseLogging()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SamlAuthBackend resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SamlAuthBackend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SamlAuthBackend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SamlAuthBackend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SamlAuthBackend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SamlAuthBackend resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SamlAuthBackend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SamlAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SamlAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.tune">Tune</a></code> | <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList">SamlAuthBackendTuneList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrlsInput">AcsUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRoleInput">DefaultRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityIdInput">EntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCertInput">IdpCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityIdInput">IdpEntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrlInput">IdpMetadataUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrlInput">IdpSsoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.tuneInput">TuneInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.validateAssertionSignatureInput">ValidateAssertionSignatureInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.validateResponseSignatureInput">ValidateResponseSignatureInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLoggingInput">VerboseLoggingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrls">AcsUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRole">DefaultRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemount">DisableRemount</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCert">IdpCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityId">IdpEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrl">IdpMetadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrl">IdpSsoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.validateAssertionSignature">ValidateAssertionSignature</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.validateResponseSignature">ValidateResponseSignature</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLogging">VerboseLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Tune`<sup>Required</sup> <a name="Tune" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.tune"></a>

```csharp
public SamlAuthBackendTuneList Tune { get; }
```

- *Type:* <a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList">SamlAuthBackendTuneList</a>

---

##### `AcsUrlsInput`<sup>Optional</sup> <a name="AcsUrlsInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrlsInput"></a>

```csharp
public string[] AcsUrlsInput { get; }
```

- *Type:* string[]

---

##### `DefaultRoleInput`<sup>Optional</sup> <a name="DefaultRoleInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRoleInput"></a>

```csharp
public string DefaultRoleInput { get; }
```

- *Type:* string

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemountInput"></a>

```csharp
public bool|IResolvable DisableRemountInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityIdInput"></a>

```csharp
public string EntityIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdpCertInput`<sup>Optional</sup> <a name="IdpCertInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCertInput"></a>

```csharp
public string IdpCertInput { get; }
```

- *Type:* string

---

##### `IdpEntityIdInput`<sup>Optional</sup> <a name="IdpEntityIdInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityIdInput"></a>

```csharp
public string IdpEntityIdInput { get; }
```

- *Type:* string

---

##### `IdpMetadataUrlInput`<sup>Optional</sup> <a name="IdpMetadataUrlInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrlInput"></a>

```csharp
public string IdpMetadataUrlInput { get; }
```

- *Type:* string

---

##### `IdpSsoUrlInput`<sup>Optional</sup> <a name="IdpSsoUrlInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrlInput"></a>

```csharp
public string IdpSsoUrlInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `TuneInput`<sup>Optional</sup> <a name="TuneInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.tuneInput"></a>

```csharp
public IResolvable|SamlAuthBackendTune[] TuneInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a>[]

---

##### `ValidateAssertionSignatureInput`<sup>Optional</sup> <a name="ValidateAssertionSignatureInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.validateAssertionSignatureInput"></a>

```csharp
public bool|IResolvable ValidateAssertionSignatureInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValidateResponseSignatureInput`<sup>Optional</sup> <a name="ValidateResponseSignatureInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.validateResponseSignatureInput"></a>

```csharp
public bool|IResolvable ValidateResponseSignatureInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VerboseLoggingInput`<sup>Optional</sup> <a name="VerboseLoggingInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLoggingInput"></a>

```csharp
public bool|IResolvable VerboseLoggingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AcsUrls`<sup>Required</sup> <a name="AcsUrls" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrls"></a>

```csharp
public string[] AcsUrls { get; }
```

- *Type:* string[]

---

##### `DefaultRole`<sup>Required</sup> <a name="DefaultRole" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRole"></a>

```csharp
public string DefaultRole { get; }
```

- *Type:* string

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemount"></a>

```csharp
public bool|IResolvable DisableRemount { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdpCert`<sup>Required</sup> <a name="IdpCert" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCert"></a>

```csharp
public string IdpCert { get; }
```

- *Type:* string

---

##### `IdpEntityId`<sup>Required</sup> <a name="IdpEntityId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityId"></a>

```csharp
public string IdpEntityId { get; }
```

- *Type:* string

---

##### `IdpMetadataUrl`<sup>Required</sup> <a name="IdpMetadataUrl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrl"></a>

```csharp
public string IdpMetadataUrl { get; }
```

- *Type:* string

---

##### `IdpSsoUrl`<sup>Required</sup> <a name="IdpSsoUrl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrl"></a>

```csharp
public string IdpSsoUrl { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `ValidateAssertionSignature`<sup>Required</sup> <a name="ValidateAssertionSignature" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.validateAssertionSignature"></a>

```csharp
public bool|IResolvable ValidateAssertionSignature { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValidateResponseSignature`<sup>Required</sup> <a name="ValidateResponseSignature" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.validateResponseSignature"></a>

```csharp
public bool|IResolvable ValidateResponseSignature { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VerboseLogging`<sup>Required</sup> <a name="VerboseLogging" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLogging"></a>

```csharp
public bool|IResolvable VerboseLogging { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlAuthBackendConfig <a name="SamlAuthBackendConfig" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new SamlAuthBackendConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] AcsUrls,
    string EntityId,
    string DefaultRole = null,
    bool|IResolvable DisableRemount = null,
    string Id = null,
    string IdpCert = null,
    string IdpEntityId = null,
    string IdpMetadataUrl = null,
    string IdpSsoUrl = null,
    string Namespace = null,
    string Path = null,
    IResolvable|SamlAuthBackendTune[] Tune = null,
    bool|IResolvable ValidateAssertionSignature = null,
    bool|IResolvable ValidateResponseSignature = null,
    bool|IResolvable VerboseLogging = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.acsUrls">AcsUrls</a></code> | <code>string[]</code> | The well-formatted URLs of your Assertion Consumer Service (ACS) that should receive a response from the identity provider. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.entityId">EntityId</a></code> | <code>string</code> | The entity ID of the SAML authentication service provider. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.defaultRole">DefaultRole</a></code> | <code>string</code> | The role to use if no role is provided during login. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#id SamlAuthBackend#id}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpCert">IdpCert</a></code> | <code>string</code> | The PEM encoded certificate of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpEntityId">IdpEntityId</a></code> | <code>string</code> | The entity ID of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpMetadataUrl">IdpMetadataUrl</a></code> | <code>string</code> | The metadata URL of the identity provider. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpSsoUrl">IdpSsoUrl</a></code> | <code>string</code> | The SSO URL of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.path">Path</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.tune">Tune</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#tune SamlAuthBackend#tune}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.validateAssertionSignature">ValidateAssertionSignature</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to validate the assertion signature. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.validateResponseSignature">ValidateResponseSignature</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to validate the response signature. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.verboseLogging">VerboseLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Log additional, potentially sensitive information during the SAML exchange according to the current logging level. Not recommended for production. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AcsUrls`<sup>Required</sup> <a name="AcsUrls" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.acsUrls"></a>

```csharp
public string[] AcsUrls { get; set; }
```

- *Type:* string[]

The well-formatted URLs of your Assertion Consumer Service (ACS) that should receive a response from the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#acs_urls SamlAuthBackend#acs_urls}

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.entityId"></a>

```csharp
public string EntityId { get; set; }
```

- *Type:* string

The entity ID of the SAML authentication service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#entity_id SamlAuthBackend#entity_id}

---

##### `DefaultRole`<sup>Optional</sup> <a name="DefaultRole" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.defaultRole"></a>

```csharp
public string DefaultRole { get; set; }
```

- *Type:* string

The role to use if no role is provided during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#default_role SamlAuthBackend#default_role}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.disableRemount"></a>

```csharp
public bool|IResolvable DisableRemount { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#disable_remount SamlAuthBackend#disable_remount}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#id SamlAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdpCert`<sup>Optional</sup> <a name="IdpCert" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpCert"></a>

```csharp
public string IdpCert { get; set; }
```

- *Type:* string

The PEM encoded certificate of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#idp_cert SamlAuthBackend#idp_cert}

---

##### `IdpEntityId`<sup>Optional</sup> <a name="IdpEntityId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpEntityId"></a>

```csharp
public string IdpEntityId { get; set; }
```

- *Type:* string

The entity ID of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#idp_entity_id SamlAuthBackend#idp_entity_id}

---

##### `IdpMetadataUrl`<sup>Optional</sup> <a name="IdpMetadataUrl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpMetadataUrl"></a>

```csharp
public string IdpMetadataUrl { get; set; }
```

- *Type:* string

The metadata URL of the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#idp_metadata_url SamlAuthBackend#idp_metadata_url}

---

##### `IdpSsoUrl`<sup>Optional</sup> <a name="IdpSsoUrl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpSsoUrl"></a>

```csharp
public string IdpSsoUrl { get; set; }
```

- *Type:* string

The SSO URL of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#idp_sso_url SamlAuthBackend#idp_sso_url}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#namespace SamlAuthBackend#namespace}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#path SamlAuthBackend#path}

---

##### `Tune`<sup>Optional</sup> <a name="Tune" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.tune"></a>

```csharp
public IResolvable|SamlAuthBackendTune[] Tune { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#tune SamlAuthBackend#tune}.

---

##### `ValidateAssertionSignature`<sup>Optional</sup> <a name="ValidateAssertionSignature" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.validateAssertionSignature"></a>

```csharp
public bool|IResolvable ValidateAssertionSignature { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to validate the assertion signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#validate_assertion_signature SamlAuthBackend#validate_assertion_signature}

---

##### `ValidateResponseSignature`<sup>Optional</sup> <a name="ValidateResponseSignature" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.validateResponseSignature"></a>

```csharp
public bool|IResolvable ValidateResponseSignature { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to validate the response signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#validate_response_signature SamlAuthBackend#validate_response_signature}

---

##### `VerboseLogging`<sup>Optional</sup> <a name="VerboseLogging" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.verboseLogging"></a>

```csharp
public bool|IResolvable VerboseLogging { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Log additional, potentially sensitive information during the SAML exchange according to the current logging level. Not recommended for production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#verbose_logging SamlAuthBackend#verbose_logging}

---

### SamlAuthBackendTune <a name="SamlAuthBackendTune" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new SamlAuthBackendTune {
    string[] AllowedResponseHeaders = null,
    string[] AuditNonHmacRequestKeys = null,
    string[] AuditNonHmacResponseKeys = null,
    string DefaultLeaseTtl = null,
    string ListingVisibility = null,
    string MaxLeaseTtl = null,
    string[] PassthroughRequestHeaders = null,
    string TokenType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#allowed_response_headers SamlAuthBackend#allowed_response_headers}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#audit_non_hmac_request_keys SamlAuthBackend#audit_non_hmac_request_keys}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#audit_non_hmac_response_keys SamlAuthBackend#audit_non_hmac_response_keys}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.defaultLeaseTtl">DefaultLeaseTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#default_lease_ttl SamlAuthBackend#default_lease_ttl}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#listing_visibility SamlAuthBackend#listing_visibility}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.maxLeaseTtl">MaxLeaseTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#max_lease_ttl SamlAuthBackend#max_lease_ttl}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#passthrough_request_headers SamlAuthBackend#passthrough_request_headers}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.tokenType">TokenType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#token_type SamlAuthBackend#token_type}. |

---

##### `AllowedResponseHeaders`<sup>Optional</sup> <a name="AllowedResponseHeaders" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#allowed_response_headers SamlAuthBackend#allowed_response_headers}.

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#audit_non_hmac_request_keys SamlAuthBackend#audit_non_hmac_request_keys}.

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#audit_non_hmac_response_keys SamlAuthBackend#audit_non_hmac_response_keys}.

---

##### `DefaultLeaseTtl`<sup>Optional</sup> <a name="DefaultLeaseTtl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.defaultLeaseTtl"></a>

```csharp
public string DefaultLeaseTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#default_lease_ttl SamlAuthBackend#default_lease_ttl}.

---

##### `ListingVisibility`<sup>Optional</sup> <a name="ListingVisibility" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#listing_visibility SamlAuthBackend#listing_visibility}.

---

##### `MaxLeaseTtl`<sup>Optional</sup> <a name="MaxLeaseTtl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.maxLeaseTtl"></a>

```csharp
public string MaxLeaseTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#max_lease_ttl SamlAuthBackend#max_lease_ttl}.

---

##### `PassthroughRequestHeaders`<sup>Optional</sup> <a name="PassthroughRequestHeaders" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#passthrough_request_headers SamlAuthBackend#passthrough_request_headers}.

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#token_type SamlAuthBackend#token_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### SamlAuthBackendTuneList <a name="SamlAuthBackendTuneList" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new SamlAuthBackendTuneList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.get"></a>

```csharp
private SamlAuthBackendTuneOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.property.internalValue"></a>

```csharp
public IResolvable|SamlAuthBackendTune[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a>[]

---


### SamlAuthBackendTuneOutputReference <a name="SamlAuthBackendTuneOutputReference" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new SamlAuthBackendTuneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetAllowedResponseHeaders">ResetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetDefaultLeaseTtl">ResetDefaultLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetListingVisibility">ResetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetMaxLeaseTtl">ResetMaxLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetPassthroughRequestHeaders">ResetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedResponseHeaders` <a name="ResetAllowedResponseHeaders" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetAllowedResponseHeaders"></a>

```csharp
private void ResetAllowedResponseHeaders()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys"></a>

```csharp
private void ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys"></a>

```csharp
private void ResetAuditNonHmacResponseKeys()
```

##### `ResetDefaultLeaseTtl` <a name="ResetDefaultLeaseTtl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetDefaultLeaseTtl"></a>

```csharp
private void ResetDefaultLeaseTtl()
```

##### `ResetListingVisibility` <a name="ResetListingVisibility" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetListingVisibility"></a>

```csharp
private void ResetListingVisibility()
```

##### `ResetMaxLeaseTtl` <a name="ResetMaxLeaseTtl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetMaxLeaseTtl"></a>

```csharp
private void ResetMaxLeaseTtl()
```

##### `ResetPassthroughRequestHeaders` <a name="ResetPassthroughRequestHeaders" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetPassthroughRequestHeaders"></a>

```csharp
private void ResetPassthroughRequestHeaders()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetTokenType"></a>

```csharp
private void ResetTokenType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.allowedResponseHeadersInput">AllowedResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.defaultLeaseTtlInput">DefaultLeaseTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.listingVisibilityInput">ListingVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.maxLeaseTtlInput">MaxLeaseTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput">PassthroughRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.defaultLeaseTtl">DefaultLeaseTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.maxLeaseTtl">MaxLeaseTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedResponseHeadersInput`<sup>Optional</sup> <a name="AllowedResponseHeadersInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.allowedResponseHeadersInput"></a>

```csharp
public string[] AllowedResponseHeadersInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput"></a>

```csharp
public string[] AuditNonHmacRequestKeysInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput"></a>

```csharp
public string[] AuditNonHmacResponseKeysInput { get; }
```

- *Type:* string[]

---

##### `DefaultLeaseTtlInput`<sup>Optional</sup> <a name="DefaultLeaseTtlInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.defaultLeaseTtlInput"></a>

```csharp
public string DefaultLeaseTtlInput { get; }
```

- *Type:* string

---

##### `ListingVisibilityInput`<sup>Optional</sup> <a name="ListingVisibilityInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.listingVisibilityInput"></a>

```csharp
public string ListingVisibilityInput { get; }
```

- *Type:* string

---

##### `MaxLeaseTtlInput`<sup>Optional</sup> <a name="MaxLeaseTtlInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.maxLeaseTtlInput"></a>

```csharp
public string MaxLeaseTtlInput { get; }
```

- *Type:* string

---

##### `PassthroughRequestHeadersInput`<sup>Optional</sup> <a name="PassthroughRequestHeadersInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput"></a>

```csharp
public string[] PassthroughRequestHeadersInput { get; }
```

- *Type:* string[]

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `AllowedResponseHeaders`<sup>Required</sup> <a name="AllowedResponseHeaders" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; }
```

- *Type:* string[]

---

##### `DefaultLeaseTtl`<sup>Required</sup> <a name="DefaultLeaseTtl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.defaultLeaseTtl"></a>

```csharp
public string DefaultLeaseTtl { get; }
```

- *Type:* string

---

##### `ListingVisibility`<sup>Required</sup> <a name="ListingVisibility" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; }
```

- *Type:* string

---

##### `MaxLeaseTtl`<sup>Required</sup> <a name="MaxLeaseTtl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.maxLeaseTtl"></a>

```csharp
public string MaxLeaseTtl { get; }
```

- *Type:* string

---

##### `PassthroughRequestHeaders`<sup>Required</sup> <a name="PassthroughRequestHeaders" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; }
```

- *Type:* string[]

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SamlAuthBackendTune InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a>

---



