# `pkiExternalCaSecretBackendOrderCertificate` Submodule <a name="`pkiExternalCaSecretBackendOrderCertificate` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendOrderCertificate <a name="PkiExternalCaSecretBackendOrderCertificate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/pki_external_ca_secret_backend_order_certificate vault_pki_external_ca_secret_backend_order_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new PkiExternalCaSecretBackendOrderCertificate(Construct Scope, string Id, PkiExternalCaSecretBackendOrderCertificateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig">PkiExternalCaSecretBackendOrderCertificateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig">PkiExternalCaSecretBackendOrderCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendOrderCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendOrderCertificate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendOrderCertificate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendOrderCertificate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendOrderCertificate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendOrderCertificate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiExternalCaSecretBackendOrderCertificate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiExternalCaSecretBackendOrderCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/pki_external_ca_secret_backend_order_certificate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendOrderCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.caChain">CaChain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.orderIdInput">OrderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.orderId">OrderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CaChain`<sup>Required</sup> <a name="CaChain" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.caChain"></a>

```csharp
public string[] CaChain { get; }
```

- *Type:* string[]

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OrderIdInput`<sup>Optional</sup> <a name="OrderIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.orderIdInput"></a>

```csharp
public string OrderIdInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.orderId"></a>

```csharp
public string OrderId { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendOrderCertificateConfig <a name="PkiExternalCaSecretBackendOrderCertificateConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new PkiExternalCaSecretBackendOrderCertificateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Mount,
    string OrderId,
    string RoleName,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.mount">Mount</a></code> | <code>string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.orderId">OrderId</a></code> | <code>string</code> | The unique identifier for the ACME order. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.roleName">RoleName</a></code> | <code>string</code> | Name of the role associated with the order. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/pki_external_ca_secret_backend_order_certificate#mount PkiExternalCaSecretBackendOrderCertificate#mount}

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.orderId"></a>

```csharp
public string OrderId { get; set; }
```

- *Type:* string

The unique identifier for the ACME order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/pki_external_ca_secret_backend_order_certificate#order_id PkiExternalCaSecretBackendOrderCertificate#order_id}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Name of the role associated with the order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/pki_external_ca_secret_backend_order_certificate#role_name PkiExternalCaSecretBackendOrderCertificate#role_name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/pki_external_ca_secret_backend_order_certificate#namespace PkiExternalCaSecretBackendOrderCertificate#namespace}

---



