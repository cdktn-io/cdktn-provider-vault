# `tpmAuthBackendConfig` Submodule <a name="`tpmAuthBackendConfig` Submodule" id="@cdktn/provider-vault.tpmAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TpmAuthBackendConfig <a name="TpmAuthBackendConfig" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config vault_tpm_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new TpmAuthBackendConfig(Construct Scope, string Id, TpmAuthBackendConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig">TpmAuthBackendConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig">TpmAuthBackendConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetCaLifetime">ResetCaLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetCaSoftExpiry">ResetCaSoftExpiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetDefaultCertTtl">ResetDefaultCertTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCaLifetime` <a name="ResetCaLifetime" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetCaLifetime"></a>

```csharp
private void ResetCaLifetime()
```

##### `ResetCaSoftExpiry` <a name="ResetCaSoftExpiry" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetCaSoftExpiry"></a>

```csharp
private void ResetCaSoftExpiry()
```

##### `ResetDefaultCertTtl` <a name="ResetDefaultCertTtl" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetDefaultCertTtl"></a>

```csharp
private void ResetDefaultCertTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TpmAuthBackendConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TpmAuthBackendConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TpmAuthBackendConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TpmAuthBackendConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TpmAuthBackendConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TpmAuthBackendConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TpmAuthBackendConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TpmAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TpmAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caLifetimeInput">CaLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caSoftExpiryInput">CaSoftExpiryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.defaultCertTtlInput">DefaultCertTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caLifetime">CaLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caSoftExpiry">CaSoftExpiry</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.defaultCertTtl">DefaultCertTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CaLifetimeInput`<sup>Optional</sup> <a name="CaLifetimeInput" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caLifetimeInput"></a>

```csharp
public double CaLifetimeInput { get; }
```

- *Type:* double

---

##### `CaSoftExpiryInput`<sup>Optional</sup> <a name="CaSoftExpiryInput" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caSoftExpiryInput"></a>

```csharp
public double CaSoftExpiryInput { get; }
```

- *Type:* double

---

##### `DefaultCertTtlInput`<sup>Optional</sup> <a name="DefaultCertTtlInput" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.defaultCertTtlInput"></a>

```csharp
public double DefaultCertTtlInput { get; }
```

- *Type:* double

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `CaLifetime`<sup>Required</sup> <a name="CaLifetime" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caLifetime"></a>

```csharp
public double CaLifetime { get; }
```

- *Type:* double

---

##### `CaSoftExpiry`<sup>Required</sup> <a name="CaSoftExpiry" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caSoftExpiry"></a>

```csharp
public double CaSoftExpiry { get; }
```

- *Type:* double

---

##### `DefaultCertTtl`<sup>Required</sup> <a name="DefaultCertTtl" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.defaultCertTtl"></a>

```csharp
public double DefaultCertTtl { get; }
```

- *Type:* double

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TpmAuthBackendConfigConfig <a name="TpmAuthBackendConfigConfig" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new TpmAuthBackendConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Mount,
    double CaLifetime = null,
    double CaSoftExpiry = null,
    double DefaultCertTtl = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.mount">Mount</a></code> | <code>string</code> | Path of the enabled TPM auth backend mount to configure. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.caLifetime">CaLifetime</a></code> | <code>double</code> | How long each CA is valid once it becomes active, in seconds. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.caSoftExpiry">CaSoftExpiry</a></code> | <code>double</code> | How long before hard expiry the active CA stops signing new certificates, in seconds. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.defaultCertTtl">DefaultCertTtl</a></code> | <code>double</code> | Default lifetime for issued client certificates when the role does not specify `cert_ttl`, in seconds. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path of the enabled TPM auth backend mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#mount TpmAuthBackendConfig#mount}

---

##### `CaLifetime`<sup>Optional</sup> <a name="CaLifetime" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.caLifetime"></a>

```csharp
public double CaLifetime { get; set; }
```

- *Type:* double

How long each CA is valid once it becomes active, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#ca_lifetime TpmAuthBackendConfig#ca_lifetime}

---

##### `CaSoftExpiry`<sup>Optional</sup> <a name="CaSoftExpiry" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.caSoftExpiry"></a>

```csharp
public double CaSoftExpiry { get; set; }
```

- *Type:* double

How long before hard expiry the active CA stops signing new certificates, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#ca_soft_expiry TpmAuthBackendConfig#ca_soft_expiry}

---

##### `DefaultCertTtl`<sup>Optional</sup> <a name="DefaultCertTtl" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.defaultCertTtl"></a>

```csharp
public double DefaultCertTtl { get; set; }
```

- *Type:* double

Default lifetime for issued client certificates when the role does not specify `cert_ttl`, in seconds.

When unset or `0`, the effective TTL falls back to CA soft expiry. Vault always caps the actual certificate lifetime by the remaining validity of the signing CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#default_cert_ttl TpmAuthBackendConfig#default_cert_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#namespace TpmAuthBackendConfig#namespace}

---



